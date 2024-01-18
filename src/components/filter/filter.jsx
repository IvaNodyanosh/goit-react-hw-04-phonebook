import { Component } from "react"
import { RiUserSearchFill } from "react-icons/ri";
import css from "./filter.module.css"



export class Filter extends Component{
    render() {
        return <label className={css.filter__label}>
            <RiUserSearchFill className={css.filter__icon} />
            <input type="text" name="filter" className={css.filter__input} placeholder="Find contact by Name" required onChange={e => this.props.changeInput(e)} value={this.props.filter} />
        </label>
    }
}