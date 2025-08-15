import { readContacts } from "../utils/readContacts";

export const getAllContacts = async () => {
    try {
        const existingContacts = await readContacts();
        return existingContacts;
    } catch (error) {
        console.error('Помилка читання файлу:', error);
        return [];
  }
};

console.log(await getAllContacts());
