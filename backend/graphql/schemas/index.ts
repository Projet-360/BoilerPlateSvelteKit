import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Import all types from a given directory asynchronously.
 * @param directory The directory to read the types from.
 * @returns A promise that resolves to an array of imported types.
 */
const importTypesFromDirectory = async (directory: string): Promise<any[]> => {
  const types: any[] = [];

  // Read all files in the directory
  const files = fs.readdirSync(directory);

  for (const file of files) {
    // Build the full path to the file
    const filePath = path.join(directory, file);

    // Convert file path to URL
    const fileUrl = pathToFileURL(filePath).href;

    // Import the file dynamically
    const typeModule = await import(fileUrl);

    // Get the default export which is the type
    const type = typeModule.default;

    // Add the imported module to the types array
    types.push(type);
  }

  return types;
};

// Import types from the Auth directory
const authTypes = await importTypesFromDirectory(path.join(__dirname, 'Auth'));

// Manually import other types
import greetingType from './greetingType.js';

export const typeDefs = [greetingType, ...authTypes];
