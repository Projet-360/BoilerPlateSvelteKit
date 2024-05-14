import fs from 'fs';
import path from 'path';

/**
 * Import all types from a given directory.
 * @param directory The directory to read the types from.
 * @returns An array of imported types.
 */
const importTypesFromDirectory = (directory: string): any[] => {
  const types: any[] = [];

  // Read all files in the directory
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    // Build the full path to the file
    const filePath = path.join(directory, file);

    // Import the file dynamically
    const type = require(filePath);

    // Add the imported module to the types array
    types.push(type);
  });

  return types;
};

// Import types from the Auth directory
const authTypes = importTypesFromDirectory(path.join(__dirname, 'Auth'));

// Manually import other types
import { greetingType } from './greetingType.js';

export const typeDefs = [greetingType, ...authTypes];
