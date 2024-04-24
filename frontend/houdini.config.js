// houdini.config.js
import { defineConfig } from 'houdini'

export default defineConfig({
    schemaPath: './graphql/schema.graphql',
    sourceGlob: 'src/**/*.svelte',
    module: 'esm',
    framework: 'kit',
    apiUrl: 'https://localhost:2000/graphql',
})
