import { Component } from "react"
import css from "./contactList.module.css"
import { MdDeleteForever } from "react-icons/md";

export class ContactList extends Component {

    render() {
        
        return <ul className={css.contactList}>
            {this.props.filterObjects.map(({ id, number, name }) => <li key={id} className={css.contactList__item}><p className={css.contactList__text}><span className={css.contactList__name}>{name}:</span>   {number}</p><button id={id} onClick={e => this.props.deleteContact(e)} type="button" className={css.contactList__button}><MdDeleteForever className={css.contactList__icon} /></button></li> )}
        </ul>
    }
}