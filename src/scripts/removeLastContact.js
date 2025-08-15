import {writeContacts} from '../utils/writeContacts.js';
import {readContacts} from '../utils/readContacts.js';

export const removeLastContact = async () => {
    try {
        const existingContacts = await readContacts();
        if (!existingContacts.length) return;
        existingContacts.pop();

        await writeContacts(existingContacts);
        console.log(`Видалено останній контакт. Залишилось: ${existingContacts.length}`);
    } catch (error){
        console.error('Сталася помилка під час видалення контакту:', error);
    }
 };

removeLastContact();
