import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts';

export const removeAllContacts = async () => { 
    const EmptyData = JSON.stringify([]);
    try {
        await fs.writeFile(PATH_DB, EmptyData, 'utf-8');
        console.log('База даних контактів успішно усунена.');
    } catch (error) {
        console.error('Сталася помилка під час генерації контактів:', error);
    }
};

removeAllContacts();
