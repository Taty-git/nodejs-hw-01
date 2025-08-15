
import {writeContacts} from '../utils/writeContacts.js';

export const removeAllContacts = async () => { 
    
    try {
        await writeContacts([]);
        console.log('База даних контактів успішно усунена.');
    } catch (error) {
        console.error('Сталася помилка під час генерації контактів:', error);
    }
};

removeAllContacts();
