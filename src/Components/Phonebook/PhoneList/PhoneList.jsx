import React from "react";
import PropTypes from "prop-types";
import PhoneListItem from "./../PhoneListItem/PhoneListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  contactsSelector,
  filterSelector,
} from "../../../redux/phonebook/contactsSelector";
import { deleteContactOperating } from "../../../redux/phonebook/phonebookOperations";

const PhoneList = () => {
  const filter = useSelector(filterSelector);
  const contacts = useSelector(contactsSelector);
  console.log("contact", contacts);
  const getFilteredContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };
  const dispatch = useDispatch(deleteContactOperating);
  const deleteContact = (e) => {
    dispatch(deleteContactOperating(e.target.id));
  };
  return (
    <ul>
      {getFilteredContacts().map((contact) => (
        <PhoneListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

PhoneList.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
export default PhoneList;

// import React from "react";
// import PropTypes from "prop-types";
// import PhoneListItem from "./../PhoneListItem/PhoneListItem";

// const PhoneList = ({ contacts, deleteContact }) => {
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <PhoneListItem
//           contact={contact}
//           key={contact.id}
//           deleteContact={deleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

// PhoneList.propTypes = {
//   deleteContact: PropTypes.func,
//   contacts: PropTypes.arrayOf(PropTypes.object),
// };
// export default PhoneList;
