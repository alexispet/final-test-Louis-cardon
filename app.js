import express from 'express'
import mariadb from 'mariadb'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

let port = process.env.PORT

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5
})

app.get('/', async (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'API de votre application de prod avec des notifs" })
})

app.get('/post', async (req, res) => {
  let conn
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * FROM posts')
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur lors de la récupération des posts' })
  } finally {
    if (conn) return conn.end()
  }
})

function findAvailablePort () {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      const foundPort = server.address().port
      server.close(() => resolve(foundPort))
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        port++
        server.close()
      } else {
        reject(err)
      }
    })
  })
}

findAvailablePort()
  .then((availablePort) => {
    port = availablePort
    app.listen(port, () => {
      console.log(`Serveur en cours d'exécution sur le port ${port}`)
    })
  })
  .catch((err) => {
    console.error('Erreur lors du démarrage du serveur:', err)
  })

export default app
