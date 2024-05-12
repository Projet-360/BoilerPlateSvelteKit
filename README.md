# Boiler Plate NodeJs, SvelteKit

## 🌟 Introduction

Salut à tous ! 🎉 Bienvenue sur mon Boiler Plate, un projet conçu pour vous propulser dans le monde de SvelteKit et Node.js sans délai. Ce projet est votre lance-pierre pour le développement créatif, l'ingénierie web et bien plus encore.

## 🚀 Pourquoi ce Projet ?

Vous vous demandez pourquoi contribuer à ce projet ? Voici pourquoi :

- **Collaboration :** Ce n'est pas seulement mon projet, c'est aussi le vôtre. Ensemble, nous pouvons l'améliorer.
- **Sécurité :** J'ai mis l'accent sur des pratiques de sécurité robustes.
- **Natif :** À terme, le but est de minimiser les dépendances et d'utiliser autant que possible des fonctionnalités natives.
  
## ⚠️ Points à Améliorer

- **Documentation :** JSDocs n'est pas encore complètement intégré.
- **Tests :** Les tests backend sont en cours de développement.
- **Langue :** Vous pourrez trouver du code et des commentaires en français, bien que j'essaie de tout traduire en anglais.
- **CSS :** J'utilise SCSS mais pas de CSS dans les composants Svelte. Vous êtes libres d'utiliser SASS pour des inclusions.

## 💻 Installation Rapide

1. **Docker & MongoDB :**
    - Installer [Docker](https://www.docker.com/get-started).
    - Exécuter `docker run --name BoilerPlateSvelteKitDB -p 27018:27017 -d mongo:4.4`

2. **Dépendances :**
    - Frontend : `npm i`
    - Backend : dans le dossier backend, exécuter `npm i`

3. **Playwright :**
    - `npx playwright install`

4. **MailHog :**
    - Télécharger [MailHog](https://github.com/mailhog/MailHog/releases/v1.0.0).

5. **Extensions :**
    - Installer l'extension Prettier sur VSCode.

6. **Lancer Lighthouse :**
    - `lhci autorun --collect.url=http://127.0.0.1:1000 --upload.target=filesystem --upload.outputDir=./lighthouse-reports/`

## 🌐 Accès Local

- Frontend : [https://localhost:1000](https://localhost:1000)
- Backend : [https://localhost:2000](https://localhost:2000)
- Mail : [http://localhost:8025](http://localhost:8025)

## 🎨 Caractéristiques Principales

### SvelteKit -> UITools
- **Cursor :** Curseur personnalisable.
- **Darkmode :** Pour les fans du mode sombre.
- **Notifications :** Gérer les notifications côté serveur.
- **PageTransition :** Transitions de page natives.
- **Preloader :** Pour une expérience utilisateur fluide.
- **ServiceWorker :** PWA est en place.
- **SmoothScroller :** Défilement doux.
- **Translations :** Multilingue.

### Autres
- **ThreeJs :** Insertion vanilla de ThreeJS.
- **SCSS :** Architecture 7-1.
- **MongoDB :** Authentification complète.
- **Tests :** Validation et création de compte avec Playwright.

## 🛠 À Faire

- [ ] Intégrer les RateLimiter sur chaque champ.
- [ ] Intégrer 0Auth.
- [ ] Tests pour les rôles et la langue.
- [ ] Et bien plus...

## 🤝 Contribuer

Votre contribution peut faire de ce projet une référence pour tout développeur SvelteKit. N'hésitez pas à ouvrir des issues, à proposer des améliorations ou à soumettre des PRs.

## 💌 Contact

Si vous avez des questions ou des suggestions, n'hésitez pas à m'envoyer un [mail](mailto:your-email@example.com) ou à ouvrir une issue.

---

Merci d'avoir pris le temps de lire ce README. J'attends vos retours avec impatience ! 😄🚀


env front: 
VITE_URL_BACK=https://localhost:2000
VITE_SECRETKEY=kjqhfkjefhllhswfmosjgmsrdgjmdsligj
KEYPATH=C:/Web/Boilerplate/backend/SSL/localhost-key.pem
CERTPATH=C:/Web/Boilerplate/backend/SSL/localhost.pem
TOKEN_NAME=tokenNameVAR



back:
MONGO_ONLINE=mongodb+srv://pierrefabiendev:NprOwMcUgwl6xonz@mongosveltekit.csdduve.mongodb.net/
DATABASE_NAME=BoilerPlateSvelteKitDB
TOKEN_EXPIRY=1
VERIFICATION_EXPIRY_HOURS=1h
URL_FRONT_LOCAL=https://localhost:1000
URL_GRAPHQL=https://localhost:2000/graphql
URL_FRONT=https://exemple.com
PORT: 2000
SECRETKEY=kjqhfkjefhllhswfmosjgmsrdgjmdsligj
MAIL_HOST=localhost
MAIL_PORT: 1025
EMAIL_USER=no_reply@SvelteKit.com
EMAIL_PASSWORD=passwordTest
MAIL_SERVER=no_reply@SvelteKit.com
NODE_ENV=dev
KEYPATH=C:/Web/Boilerplate/backend/SSL/localhost-key.pem
CERTPATH=C:/Web/Boilerplate/backend/SSL/localhost.pem
TOKEN_NAME=tokenNameVAR

A FAIRE:
intégrer 0Auth

mettre la lang dans local storage
savoir comment faire pour améliorer la gestion des documents Langues
Si un token a était envoyer ne pas donner un autre // Changement de mot de passe email
gerer les token invalide
Les envoie d'email ne sont pas traduits

NEWS FRONT END:
- Rendre la 3d modulaire
creer un store pour les modele 3d
renderer en module
mettre en place un clearer
Le loader modele
savoir prendre en considération le fait d'initialiser dans des const l'utilisation de modele 3d afin de clear facilement

- mettre en place loader au début et préloader et transition de page
- optimiser les stores pour la gestion des loader
- mettre en place des dossiers pour la data
- Mettre en place la compréhension en profondeur du serviceWorker afin de telecharger les ressources avec une bonne gestion
- mettre en place la gestion des scrolls.
- faire un cursor ultime en 3d

- rendre le notification generale ...genre un tableaux sur toute les possibilités
- Faire les messages coté admin et user de notification
- faire les tests coté admin et user
- Mettre en ligne l'app

Si 1000 est utilisé 

netstat -ano | findstr :1000
netstat -ano | findstr :8025

taskkill /PID <PID> /F
taskkill /PID 11504 /F



Finir les API
Faire le middleware
Faire passer les test