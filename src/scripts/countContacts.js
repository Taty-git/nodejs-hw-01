
import {readContacts} from '../utils/readContacts.js';

export const countContacts = async () => {
     try {
    const existingContacts = await readContacts();
    return existingContacts.length;
  } catch (error) {
    console.error('Помилка при підрахуванні контактів', error);
  }
};

console.log(await countContacts());
