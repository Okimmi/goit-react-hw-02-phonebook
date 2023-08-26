import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Btn, List, ListItem } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Btn onClick={() => deleteContact(id)}>
            <MdOutlineRemoveCircleOutline size="24" />
          </Btn>
          {name}: {number}
        </ListItem>
      ))}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
