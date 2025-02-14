import { useState, useEffect } from 'react';
import ContactFotm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContact from './assets/initialContact.json';
import './App.css';

function App() {
  const [contakts, setContacts] = useState(() => {
    const saveDate = JSON.parse(localStorage.getItem('contacts'));
    if (!saveDate) {
      return initialContact;
    }
    if (saveDate.length === 0) {
      return initialContact;
    }
    return saveDate;
  });
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contakts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contakts));
  }, [contakts]);

  return (
    <div>
      <div className="cont">
        <h1>Phonebook</h1>
      </div>

      <ContactFotm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contakts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
