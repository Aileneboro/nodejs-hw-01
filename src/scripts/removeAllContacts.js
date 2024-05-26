import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]');
    console.log('All contacts removed successfully');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

await removeAllContacts();
