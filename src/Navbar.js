import React from 'react';
import {links} from './data'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <header>
            <div className="nav-header">
                <h4>omas ajiri</h4>
                <button className="icon-nav">
                    <FaBars />
                </button>
            </div>
            <ul className="nav-items">
                {links.map((link) => {
                    const {id, url, text, icon} = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}</a>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}

export default Navbar