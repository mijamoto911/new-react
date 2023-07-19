import React, {
  useEffect,
  useMemo,
  useCallback,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import "./style.css";

const initialState = {
  contacts: [],
  showAddContactForm: false,
  selectedContactId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "TOGGLE_ADD_CONTACT_FORM":
      return { ...state, showAddContactForm: !state.showAddContactForm };
    case "SELECT_CONTACT":
      return { ...state, selectedContactId: action.payload };
    default:
      return state;
  }
};

const Contacts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "SET_CONTACTS", payload: response.data });
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }, []);

  const deleteContact = useCallback((contactId) => {
    dispatch({ type: "DELETE_CONTACT", payload: contactId });
  }, []);

  const toggleAddContactForm = useCallback(() => {
    dispatch({ type: "TOGGLE_ADD_CONTACT_FORM" });
  }, []);

  const selectContact = useCallback((contactId) => {
    dispatch({ type: "SELECT_CONTACT", payload: contactId });
  }, []);

  const { contacts, showAddContactForm, selectedContactId } = state;

  const contactRows = useMemo(() => {
    return contacts.map((contact) => (
      <tr
        key={contact.id}
        className={contact.id === selectedContactId ? "selected" : ""}
      >
        <td onClick={() => selectContact(contact.id)}>{contact.name}</td>
        <td>{contact.username}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>
          <button className="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
  }, [contacts, deleteContact, selectContact, selectedContactId]);

  return (
    <div className="container-contact">
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr className="form">
            <th>Name</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{contactRows}</tbody>
      </table>
      <button onClick={toggleAddContactForm}>Show Add Contact Form</button>
      {showAddContactForm && <AddContactForm />}
    </div>
  );
};

const AddContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  const saveContact = useCallback(() => {
    setContactData({ name: "", username: "", phone: "", email: "" });
  }, []);

  return (
    <div>
      <h2>Add Contact</h2>
      <form method="POST">
        <div>
          <input
            className="form"
            type="text"
            placeholder="name"
            name="name"
            value={contactData.name}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
            required
          />
          <input
            className="form"
            type="text"
            placeholder="User name"
            name="username"
            value={contactData.username}
            onChange={(e) =>
              setContactData({ ...contactData, username: e.target.value })
            }
            required
          />
        </div>
        <div>
          <input
            className="phone"
            type="tel"
            placeholder="Phone"
            name="phone"
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
            required
          />
        </div>
        <div>
          <input
            className="email"
            type="email"
            placeholder="Email"
            name="email"
            value={contactData.email}
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
            required
          />
        </div>
      </form>
      <button onClick={saveContact}>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default Contacts;
