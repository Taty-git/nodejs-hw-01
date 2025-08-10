import fs from 'node:fs/promises';
import {PATH_DB} from '../constants/contacts';
import {createFakeContact} from '../utils/createFakeContact';


export const addOneContact = async (number = 1) => { 
    try {
        const existingData = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(existingData);
        const newContacts = Array.from({length: number}, () =>
            createFakeContact(),
        );
        const updatedContacts = [...contacts, ...newContacts];
        await fs.writeFile(
            PATH_DB,
            JSON.stringify(updatedContacts, PATH_DB, 2),
            'utf-8',
        );
        console.log(`Успішно додано ${number} нових контактів.`);
    } catch (error) {
    console.error('Сталася помилка під час генерації контактів:', error);
    } 
};

addOneContact();
