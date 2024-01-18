import mariadb from "mariadb";

// Configuration de la base de données
const pool = mariadb.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'votre_utilisateur',
    password: process.env.DB_PASSWORD || 'votre_mot_de_passe',
    database: process.env.DB_DATABASE || 'votre_base_de_donnees',
    connectionLimit: 5
});

async function initDB() {
    let conn;
    try {
        conn = await pool.getConnection();

        await conn.query(`
          CREATE TABLE IF NOT EXISTS posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        console.log('Structure de la base de données créée avec succès.');
        await conn.query(`
          INSERT INTO posts (title, content) VALUES
          ('Premier post', 'Contenu du premier post'),
          ('Deuxième post', 'Contenu du deuxième post'),
          ('Troisième post', 'Contenu du troisième post')
        `);

        console.log('Données insérées avec succès.');
    } catch (err) {
        console.error('Erreur lors de l\'initialisation de la base de données:', err);
    } finally {
        if (conn) {
            await conn.end();
        }
        process.exit();
    }
}

initDB();
