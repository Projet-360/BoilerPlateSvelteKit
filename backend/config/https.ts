import fs from 'fs';
import https from 'https';
import type { Application } from 'express'; // Importe le type Express pour une meilleure intégration avec TypeScript

import dotenv from 'dotenv';
dotenv.config();

/**
 * Initialisation du serveur HTTPS.
 * Cette fonction prend une application Express en paramètre et retourne un serveur HTTPS.
 *
 * @param app L'application Express à laquelle le serveur HTTPS sera lié.
 * @returns Le serveur HTTPS configuré.
 */
export function setupHttpsServer(app: Application): https.Server {
  // Vérifier si les chemins des clés et des certificats sont définis dans les variables d'environnement
  if (!process.env.KEYPATH || !process.env.CERTPATH) {
    console.error(
      'Les chemins des clés ou des certificats ne sont pas définis.',
    );
    process.exit(1); // Arrêter le processus en cas d'erreur
  }

  // Vérifier si les fichiers de clé et de certificat existent
  if (
    !fs.existsSync(process.env.KEYPATH) ||
    !fs.existsSync(process.env.CERTPATH)
  ) {
    console.error(
      "Les fichiers de clé ou de certificat n'existent pas aux emplacements spécifiés.",
    );
    process.exit(1); // Arrêter le processus en cas d'erreur
  }

  // Créer le serveur HTTPS avec les fichiers de clé et de certificat
  const server = https.createServer(
    {
      key: fs.readFileSync(process.env.KEYPATH),
      cert: fs.readFileSync(process.env.CERTPATH),
    },
    app,
  );

  return server;
}
