import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const tsNode = require('ts-node');

// Configure ts-node
tsNode.register({
    project: './tsconfig.json', // Chemin vers votre fichier tsconfig.json
    transpileOnly: true, // Pour des constructions plus rapides sans vérification de type
    compilerOptions: {
        module: 'ESNext',
        target: 'ES2020'
    }
});

// Vous pouvez désormais exécuter des fichiers TypeScript qui utilisent des imports ES
