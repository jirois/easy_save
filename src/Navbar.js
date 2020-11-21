import React from 'react';
import {links} from './data'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
    const { openSidebar } = useGlobalContext()
    return (
        <nav className="nav-bar">
          <div className="nav-center">
            <div className="nav-header">
                <h4>Dial to save</h4>
                <button onClick={openSidebar} className="icon-nav">
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
            </div>
        </nav>
    )
}

export default Navbar