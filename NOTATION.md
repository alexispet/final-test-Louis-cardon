# Notation

- [x] Vous avez un Dockerfile permettant de créer une image contenant l’application prête à l’emploi
- [x] Vous avez docker-compose.yml permettant de travailler sur le projet en local
- [x] Vous avez un script docker entrypoint qui exécute le script d’import de BDD
- [x] Vous avez un script docker entrypoint qui installe les dépendances seulement en dev
- [x] Vous faites du multi stage build pour alléger le poids final de votre image
- [x] Dans un workflow GitHub, vous lancez les tests
- [x] Dans un workflow GitHub, vous construisez et envoyez l’image docker de l’application sur un registry
- [ ] Dans un workflow GitHub, vous lancez un audit de sécurité
- [x] Les identifiants de connexion à la base de données sont passés en environnement
- [x] Les identifiants de connexion à la base de données de prod ne sont jamais visibles dans le code versionné
- [ ] Vous avez eslint de fonctionnel en local et sur le workflow GitHub
- [x] Vous avez docker-compose.prod.yml permettant de lancer l’application en mode prod
- [x] Sur le serveur, l’application de production est accessible et fonctionnelle sur le port 80
- [x] Sur le serveur, vous utilisez watchtower (ou similaire) pour mettre à jour l’application sur le serveur
- [x] Sur le serveur, vous déployez un environnement de production et un environnement de développement
- [ ] Dans un workflow GitHub, lighthouse est lancé tous les jours pour auditer les performances de l’application de production
- [ ] Sur le serveur, l’application de production et de développement sont accessibles en https
- [ ] Envoyer une notification (email, slack, discord...) quand un environnement est déployé
- [ ] Vous avez un playbook Ansible qui installe docker sur le serveur.

Bonus :

- [ ] Vous avez un playbook Ansible qui copie les fichiers docker-compose du projet sur le serveur.
      Ce playbook peut-être lancé manuellement via un workflow GitHub.
      Vous envoyez une notification quand le playbook est lancé.

> Pensez à ajouter à votre projet Git tous les fichiers docker-compose qui sont sur le serveur.
