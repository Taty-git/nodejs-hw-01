import {readContacts} from '../utils/readContacts.js';
import {createFakeContact} from '../utils/createFakeContact';
import {writeContacts} from '../utils/writeContacts.js';

export const addOneContact = async (number = 1) => { 
    try {
        const existingData = await readContacts();
        const newContacts = createFakeContact();
        existingData.push(newContacts);
        
        await await writeContacts(existingData);
        console.log(`Додано контакт: ${newContacts.name}`);
    } catch (error) {
    console.error('Сталася помилка під час генерації контактів:', error);
    } 
};

addOneContact();
