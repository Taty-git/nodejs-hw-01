import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
    try {
        
        const newContacts = Array.from({ length: number }, () =>
            createFakeContact(),
        );
        const existingData = await readContacts();
             
        const updatedContacts = [...existingData, ...newContacts];
        await writeContacts(updatedContacts);

        console.log(`Успішно додано ${number} нових контактів.`);
    } catch (error) {
        console.error('Сталася помилка під час генерації контактів:', error);
    }
};


generateContacts(5);
