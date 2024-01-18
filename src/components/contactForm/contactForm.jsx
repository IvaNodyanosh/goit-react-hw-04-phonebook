import { Component } from "react";

import css from "./contactForm.module.css"

import { RiContactsFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPersonFillAdd } from "react-icons/bs";



export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    }

    changeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    formReset = () => {
        this.setState( { name: '', number: '' } )
    }

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={e => { this.props.formSubmit(e, this.state.name, this.state.number); this.formReset()}} className={css.contactForm}>
        <label>
              <RiContactsFill className={css.contactForm__icon} />
          <input type="text" name="name" required onChange={e => this.changeInput(e)} value={name} placeholder="Name"/>
        </label>
        <label>
              <BsTelephoneFill className={css.contactForm__icon} />
          <input type="tel" name="number" required onChange={e => this.changeInput(e)} value={number} placeholder="Number"/>
        </label>
            <button type="submit" className={css.contactForm__button}><BsPersonFillAdd className={css.contactForm__iconAdd} /></button>
        

        
      
      
      </form>
        )
    }

}