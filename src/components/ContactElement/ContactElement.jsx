import React from 'react';
import PropTypes from 'prop-types';
import { Contact, DelButton } from './ContactElement.styled';

const ContactElement = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <Contact>
      {name}: {number}
      <DelButton
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </DelButton>
    </Contact>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
