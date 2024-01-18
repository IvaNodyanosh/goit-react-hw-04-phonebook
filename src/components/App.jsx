import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./contactForm/contactForm";
import { Filter } from "./filter/filter";
import { ContactList } from "./contactList/contactList";

import css from "./app.module.css"


export class App extends Component{
  state = {
    contacts: [],
    filter: '',

  }
  
  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    try {
      const contacts = localStorage.getItem("contacts");
      return contacts === null ? undefined : this.setState({ "contacts": JSON.parse(contacts) });
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
    
  }

  componentDidUpdate(_, { contacts }) {

    if (contacts.length !== this.state.contacts.length) {
      
      if (this.state.contacts.length !== 0) {
        try {
          localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
        } catch (error) {
          console.error(error.message)
        }
       
      } else {
        try {
          localStorage.removeItem('contacts') 
      } catch (error) {
        console.error(error.message)
      }}
    }
      
  }
  



  formSubmit = (e, name, number) => {
    if (this.state.contacts.some(concat => concat.name === name)) {
      e.preventDefault()
      return alert(`${name}is already in contacts`)
    } else if (this.state.contacts.some(concat => concat.number === number)) {
      e.preventDefault()
      return alert(`${number}is already in contacts`)
    }e.preventDefault()
    this.setState(({ contacts }) => ({ contacts: [...contacts, { id: nanoid(), name: name, number: number }] }));


  }

  deleteContact = (e) => {
    
    const { id } = e.currentTarget
   
    this.setState(({ contacts }) => ({ contacts: contacts.filter(contact => contact.id !== id)}))
    console.log(this.state.contacts)

  }

  render() {
    const {contacts, filter} = this.state
    const filterObjects = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));  
    return (
      <div className={css.container}>
        <h1 className={css.phonebook__header}>Phonebook</h1>

        <ContactForm formSubmit={this.formSubmit} />
        <h2 className={css.phonebook__title}>Contacts</h2>
        <Filter changeInput={this.changeInput} filter={filter} />
        <ContactList filterObjects={filterObjects} deleteContact={this.deleteContact} />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;600;800&display=swap');
        </style>


    </div>
    );
  };
};
