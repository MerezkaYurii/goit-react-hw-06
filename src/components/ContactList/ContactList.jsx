import Contact from '../Contact/Contact';

const ContactList = ({ contakts, onDelete }) => {
  return (
    <ul>
      {contakts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
