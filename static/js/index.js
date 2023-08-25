import { Accueil } from './page/accueil.js';

class App {
    constructor() {
        this.currentPage = window.location.pathname;
        this.pageTarget();
    }

    pageTarget() {
        switch (this.currentPage) {
            case '/':
                const accueil = new Accueil()
                break;
            case '/about':

                break;
            // ... ajoutez d'autres cas selon vos besoins
            default:
                // Code pour toutes les autres pages ou pour gérer une erreur
                break;
        }
    }
}

const app = new App();
