import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error reading contact:', error);
  }
};

console.log(await countContacts());
