import css from './contactForm.module.css';
import { useReducer } from 'react';
import { RiContactsFill } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { BsPersonFillAdd } from 'react-icons/bs';

const reducer = (prevContactInfo, action) => {
  if (action.type === 'name' || action.type === 'number') {
    return { ...prevContactInfo, [action.type]: action.value };
  } else if(action.type === "reset"){
    return { name: '', number: '' };
  }
};

export const ContactForm = ({ formSubmit }) => {
  const [contactInfo, changeContactInfo] = useReducer(reducer, {
    name: '',
    number: '',
  });

  const changeInput = e => {
      changeContactInfo({ type: e.target.name, value: e.target.value } );
  };

  const formReset = () => {
    changeContactInfo({type:"reset"})
  };

  const { name, number } = contactInfo;
  return (
    <form
      onSubmit={e => {
        formSubmit(e, name, number);
        formReset();
      }}
      className={css.contactForm}
    >
      <label>
        <RiContactsFill className={css.contactForm__icon} />
        <input
          type="text"
          name="name"
          required
          onChange={e => changeInput(e)}
          value={name}
          placeholder="Name"
        />
      </label>
      <label>
        <BsTelephoneFill className={css.contactForm__icon} />
        <input
          type="tel"
          name="number"
          required
          onChange={e => changeInput(e)}
          value={number}
          placeholder="Number"
        />
      </label>
      <button type="submit" className={css.contactForm__button}>
        <BsPersonFillAdd className={css.contactForm__iconAdd} />
      </button>
    </form>
  );
};
