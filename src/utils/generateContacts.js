import fs from 'node:fs/promises';
import { contactsPath } from '../constants/contacts.js';
import { createFakeContact } from './createFakeContact.js';

const generateContacts = async (number) => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  const contactsList = JSON.parse(data);
  const startData = Array(number).fill(0).map(createFakeContact);
  contactsList.push(...startData);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
};

generateContacts(5);
