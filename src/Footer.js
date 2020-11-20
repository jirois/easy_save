import React from 'react';
import {social} from './data'

const Footer = () => {
    return (
        <footer>
            <ul className="icon-field">
                {social.map((link) => {
                const {id, url, icon} = link;
                return (
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
               
            })}
             </ul>
            <div>
                <p>&copy; copyright 2020, dial to save group of companies</p>
            </div>
        </footer>
    )
}

export default Footer;