import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const contactItem = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    for (const contact of contacts) {
      if (contact.name === contactItem.name) {
        window.alert(`${contactItem.name} is already in contacts`);
        return;
      }
    }

    setContacts(prevContacts => [contactItem, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
