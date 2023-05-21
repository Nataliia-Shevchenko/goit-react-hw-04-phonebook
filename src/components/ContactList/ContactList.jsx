import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from 'components/ContactElement';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactElement contact={contact} key={contact.id} onDelete={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
