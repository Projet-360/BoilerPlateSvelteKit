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

- Frontend : [http://localhost:1000](http://localhost:1000)
- Backend : [http://localhost:2000](http://localhost:2000)
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









function simulateApiRequest(responseTime: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Résultat de la requête simulée');
    }, responseTime);
  });
}

async function fetchData() {
  try {
    const responseTime = 2000; // 2000 millisecondes = 2 secondes
    const data = await simulateApiRequest(responseTime);
    console.log(data);
  } catch (error) {
    console.error('Erreur lors de la simulation de la requête:', error);
  }
}

fetchData();


env front: 
VITE_MONGO_ONLINE=mongodb+srv://pierrefabiendev:lNy9vN07FA7l1Hmb@mongosveltekit.csdduve.mongodb.net/
VITE_MONGO_LOCAL=mongodb://localhost:27018/BoilerPlateSvelteKitDB
VITE_DATABASE_NAME=BoilerPlateSvelteKitDB
VITE_TOKEN_EXPIRY=1
VITE_URL_FRONT=http://127.0.0.1:1000
VITE_URL_FRONT_LOCAL=http://localhost:1000
VITE_URL_BACK=http://localhost:2000
VITE_PORT: 2000
VITE_SECRETKEY=kjqhfkjefhllhswfmosjgmsrdgjmdsligj
VITE_MAIL_HOST=localhost
VITE_MAIL_PORT: 1025
VITE_EMAIL_USER=no_reply@SvelteKit.com
VITE_EMAIL_PASSWORD=passwordTest
VITE_MAIL_SERVER=no_reply@SvelteKit.com
VITE_NODE_ENV=dev
VITE_DB_ENV=atlas

back:
MONGO_ONLINE=mongodb+srv://pierrefabiendev:lNy9vN07FA7l1Hmb@mongosveltekit.csdduve.mongodb.net/
MONGO_LOCAL=mongodb://localhost:27018/BoilerPlateSvelteKitDB
DATABASE_NAME=BoilerPlateSvelteKitDB
TOKEN_EXPIRY=1
URL_FRONT=http://127.0.0.1:1000
URL_FRONT_LOCAL=http://localhost:1000
URL_BACK=http://localhost:2000
PORT: 2000
SECRETKEY=kjqhfkjefhllhswfmosjgmsrdgjmdsligj
MAIL_HOST=localhost
MAIL_PORT: 1025
EMAIL_USER=no_reply@SvelteKit.com
EMAIL_PASSWORD=passwordTest
MAIL_SERVER=no_reply@SvelteKit.com
NODE_ENV=dev
DB_ENV=atlas





Pour créer une structure optimisée pour Three.js au sein d'un projet SvelteKit, il est crucial de bien organiser et gérer le cycle de vie de vos instances Three.js pour éviter des problèmes tels que la multiplication des contextes WebGL. Voici une approche détaillée, étape par étape :

1. Planification de la structure du projet
A. Dossier des composants Three.js : Créez un dossier spécifique pour vos composants Three.js dans src/lib/three. Cela peut inclure des composants pour la scène, la caméra, les lumières, les objets 3D, les animations, etc.

B. Service d'initialisation Three.js : Mettez en place un service (ou une classe utilitaire) pour initialiser et configurer votre scène Three.js. Ce service s'occupera de la création de la scène, de la caméra, du renderer, etc., et exposera des méthodes pour ajouter ou retirer des éléments à la scène.

C. Gestion des ressources : Prévoyez une gestion des ressources (textures, modèles 3D, matériaux) efficace, en utilisant des singletons ou un gestionnaire de ressources pour éviter les chargements multiples.

2. Initialisation et configuration de Three.js
A. Service d'initialisation : Dans le service d'initialisation, créez des méthodes pour :

Initialiser le renderer, la scène et la caméra.
Configurer les lumières et les éléments de base de la scène.
Fournir des méthodes pour ajouter ou retirer des objets.
Gérer le redimensionnement et les ajustements du renderer en fonction des changements de taille du conteneur.
B. Singleton pour le contexte WebGL : Assurez-vous que le contexte WebGL est géré comme un singleton pour éviter les multiples instances. Cela peut être intégré dans votre service d'initialisation.

3. Intégration avec SvelteKit
A. Composant Three.js Wrapper : Créez un composant Svelte qui agira comme un conteneur pour votre scène Three.js. Ce composant utilisera le service d'initialisation pour configurer et démarrer Three.js.

B. Gestion du cycle de vie : Utilisez les hooks de cycle de vie de Svelte (onMount, onDestroy) dans votre composant wrapper pour démarrer Three.js lors de l'initialisation et le nettoyer proprement lors de la destruction du composant.

4. Rendu et mise à jour de la scène
A. Boucle d'animation : Mettez en place une boucle d'animation dans le service d'initialisation ou un gestionnaire dédié. Utilisez requestAnimationFrame pour le rendu et les mises à jour de la scène.

B. Interaction et réactivité : Gérez les interactions utilisateur et la réactivité aux données Svelte en intégrant des écouteurs d'événements et des fonctions de mise à jour dans le composant wrapper ou via le service d'initialisation.

5. Nettoyage et optimisation des performances
A. Nettoyage des ressources : Assurez-vous de libérer toutes les ressources (geometries, materials, textures) et les écouteurs d'événements lors de la destruction des composants pour éviter les fuites de mémoire.

B. Optimisation : Utilisez des techniques d'optimisation telles que le frustum culling, le level of detail (LOD), et la réduction de la taille des ressources pour améliorer les performances.

6. Gestion des ressources et chargement
A. Chargement asynchrone : Chargez les ressources (modèles, textures) de manière asynchrone et gérez l'état de chargement dans vos composants Svelte pour fournir une bonne expérience utilisateur.

B. Gestionnaire de ressources : Utilisez ou créez un gestionnaire de ressources pour gérer le chargement et le cache des ressources, évitant ainsi les chargements redondants et optimisant l'utilisation de la mémoire.

Plan d'action tâche par tâche
Configuration de l'environnement : Mettez en place votre projet SvelteKit, installez Three.js et organisez votre structure de dossiers.
Service d'initialisation Three.js : Créez votre service ou classe d'initialisation avec des méthodes pour configurer la scène, le renderer, la caméra, et les lumières.
Composant Wrapper Three.js : Développez un composant Svelte pour encapsuler la scène Three.js, utilisant le service d'initialisation pour démarrer et nettoyer Three.js.
Gestion des ressources : Mettez en place un système pour gérer efficacement les ressources Three.js, en utilisant le chargement asynchrone et un cache des ressources.
Développement de la scène : Commencez à ajouter des éléments à votre scène (objets, lumières, animations) en utilisant le service d'initialisation pour les gérer.
Optimisation et tests : Testez et optimisez votre application, en portant une attention particulière à la gestion de la mémoire, aux performances de rendu et à l'expérience utilisateur.
En suivant ces étapes, vous pouvez créer une structure robuste et performante pour intégrer Three.js dans un projet SvelteKit, en assurant une bonne gestion des instances et des ressources.