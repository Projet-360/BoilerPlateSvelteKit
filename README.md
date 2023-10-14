Crée une BD Mongo
docker run --name svelteKitDB -p 27017:27017 -d mongo:latest

lancer lighhouse: 
lhci autorun --collect.url=http://localhost:5173 --upload.target=filesystem --upload.outputDir=./lighthouse-reports/


MailHog:
https://github.com/mailhog/MailHog/releases/v1.0.0
http://localhost:8025



Chargement progressif d'images (Lazy Loading): Cela permettra de charger les images uniquement lorsqu'elles seront visibles à l'écran, ce qui améliorera les performances.

Expiration du Token: Mettre en place une durée de vie courte pour le token, disons 30 minutes à 1 heure.

javascript
Copy code
const ERROR_TYPES = Object.freeze({
  EMAIL_EXISTS: "EMAIL_EXIST",
  BAD_REQUEST: "BAD_REQUEST",
  // ...
});
Ces petites améliorations contribueront à rendre votre code plus propre, plus maintenable et plus facile à tester.



2. Gestion de Session
Timeouts de Session: Comme tu l'as mentionné précédemment, ajoute un mécanisme de timeout pour les sessions.
Déconnexion à Distance: Permet aux utilisateurs de voir les sessions actives et de les fermer si nécessaire.

4. Journalisation et Surveillance
Mets en place des logs pour suivre les tentatives de connexion réussies et échouées, les changements de mot de passe et d'autres activités sensibles. Cela aide à l'audit de sécurité et à la détection d'activités suspectes.

5. Restrictions et Verrouillages de Compte
Tentatives de Connexion Échouées: Limite le nombre de tentatives de connexion échouées pour empêcher les attaques par force brute.
Notifications: Comme tu l'as évoqué, envoie des notifications par e-mail pour les comportements suspects (comme des connexions depuis de nouveaux emplacements).

6. Tests de Sécurité
Réalise des tests de pénétration et utilise des outils comme OWASP ZAP pour identifier et corriger les vulnérabilités.



Exemples en Node.js
Helmet pour sécuriser les en-têtes HTTP:
javascript
Copy code
const helmet = require('helmet');
app.use(helmet());



Je veux que tu me parles en français. Je veux que tu prennes le rôle d'un développeur fullstack expérimenté de 25 années dans le web. Tu es très rigoureux sur les bonnes pratiques et tu n'hésites pas à recommander toute rectification si tu en trouves. Tu es un maître en JavaScript, CSS, SCSS et NodeJS. Tu connais sur la pointe des doigts Svelte et SvelteKit et Playwright. Tu es sensible au développement créatif et tu donnes les meilleures idées à ce sujet. Si tu ne trouves pas mes instructions assez claires, tu n'hésites pas à me poser des questions pour mieux comprendre. Tu fais attention dans les structures de code à toujours optimiser les performances et la lisibilité. Quand je te dis 'donne le code' tu me rends toujours le code complet sans faire d'inclusion éparse ! Tu fais de ton mieux pour réaliser des intructions pas à pas. Tu prends le rôle d'un professeur en expliquant en détail pourquoi tu le fais et comment. Pour le backend tu dois être vigilant sur les normes de sécurité. Tu dois toujours commenter le code que tu écris et il doit être en anglais.



Boiler Plate NodeJs, Sveltekit

Introduction
Salut tout le monde ! Je suis ravi de vous présenter mon boiler plate, un projet conçu pour vous aider à démarrer rapidement avec SvelteKit et Node.js. Ce boilerplate est particulièrement axé sur le développement créatif. Il commence à être assez complet et donc je pense qu'il vous demandera une approche plus importante qu'un sujet ou probleme (lambda).

Pourquoi je fais ca ?
Ce projet peut vous servir a vous aussi, nous pouvons l'ameliorer ensemble et le rendre plus robuste et clair pour chacun.
Je vous invite donc à participer à l'amélioration.L'objectif est de réaliser un boilerplate avec une gestion de compte intélligente maléable pouvant s'adapter à une base de projet. J'essaye d'avoir une sécurité de bonne valeur avec de bonnes pratiques.
l'objectif est aussi sur le long terme de n'avoir pas de trop plugins en tout genre mais des outils natifs, par exemple je referrai le smoothscroll afin d'éviter la librairie "smooth-scrollbar".

Les points negatifs: 
-L'intégration de jsDocs pas encore entière
-Les tests coté backend ne sont pas encore établis.
-Je suis un codeur français il est possible que vous trouviez de mauvais nommage ou des commentaires Français malgrès que je fasse mon possible.
-Je ne suis pas un senior en la matière donc vous pourriez croisé aussi des surprises.
-Je n'utilise pas de css dans les composants svelte, je préfère avoir ces deux choses dissociées. Vous pouvez tout de même utiliser les inclusions grace a sass
-Bien d'autre choses que je ne concidère pas.

Installation:
-Installer docker et instancier une base Mongo  : docker run --name svelteKitDB -p 27017:27017 -d mongo:latest
- installer Prettier en extension sur VsCode
-Les variables d'environnements sont pour l'instant une constante afin de vous eviter de le configurer vous même
-Mailhog s'occupe de simuler les mail de confirmations, un terminal s'ouvrira quand vous démarrerez le projet afin de pouvoir le consulter. Je travaille sur windows, si vous avez un mac vous devrez changer l'executeur pour celui-ci.
-Les notifications remonte seulement du coté backend la gestion erreur ne se fait pas coté front-end pour ce boilerplate (il ne faut jamais faire confiance au client)

Caractéristiques Principales
SvelteKit-> UITools: 
Cursor : un curseur personnalisable avec du polymorphisme.
Darkmode : un darkmode qui vous permettra de changer votre style.
Notifications : un module notifications pour les retours du serveur.
PageTransition : Les pages transitions natif a sveltekit.
Preloader: chargement de page à l'entrée de l'application.
ServiceWorker: PWA disponible.
SmoothScroller: Scroll a transition douces.
Translations: Traduction disponible sur l'application.

ThreeJs: Une insertions vanilla de ThreeJS

scss avec architecture 7-1

Mongo:
SignUp
Login
resetPassword

Role disponible
RateLimiter
MailConfirmation

Test Playwright:
test validation et création de compte

J'espère avoir tout dis afin que vous n'ayez pas de problemes en cours de route.
J'attends votre retour avec impatience.




    #A FAIRE
    Ne pas oublier les ratelimiter sur chaque champs
    intégrer les contraintes sur la partie admin et vérifier les contraintes aussi sur toutes les page reset passwords... Rendre le code propre
    se poser des questions sur handleRoleRedirection
    s
    intégrer 0Auth
    Faire les tests pour les roles et langue
    mettre la lang dans local storage
    Headers de sécurité: Utilisez des en-têtes HTTP pour sécuriser votre application, comme Content Security Policy (CSP) pour prévenir les attaques XSS.
    savoir comment faire pour améliorer la gestion des documents Langues
    Si un token a était envoyer ne pas donner un autre // Changement de mot de passe email
    gerer les token invalide
    Socket.io


    PWA
    https://www.youtube.com/watch?v=Enl4OPQ2OAM
    Supabase OAuth with SvelteKit
    https://www.youtube.com/watch?v=KfezTtt2GsA&t=531s
    https://www.youtube.com/watch?v=Q0XustAh080

    essayer de réunir les informations qui sont suivies afin d'avoir un seul endroit a toucher en cas de modifications
    modifications des données utilisateurs
    
    CONNECTION AVEC GOOGLE AU RESEAUX SOCIAUX
    JOURNALISATION ID SECU
    
