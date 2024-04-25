import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import { register as tsNodeRegister } from 'ts-node';

// Configure ts-node
tsNodeRegister({
    project: './tsconfig.json', // Path to your tsconfig.json file
    transpileOnly: true, // for faster builds without type checks
    compilerOptions: {
        module: 'ESNext',
        target: 'ES2020'
    }
});

// Register the module for '.ts' files handling
register('ts-node/esm', pathToFileURL('./'));
