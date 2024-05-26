import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    const filterContacts = contacts.filter(() => Math.random() >= 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(filterContacts), 'utf8');
    console.log('Random contacts have been deleted');
  } catch (error) {
    console.error('Error', error);
  }
};

await thanos();
