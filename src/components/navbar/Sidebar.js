import React from 'react';
import { Link } from 'react-router-dom'
import {links, socials } from '../../data';
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <aside  className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <button onClick={closeSidebar} className="close-sidebar-btn">
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {
                    links.map((link) => {
                        const {id, url, text} = link;
                        return (
                            <li key={id}>
                                <Link to={url}>
                                    {text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <ul 
            className="social-sidebar">
                <h5>Follow us on</h5>
                <div className="social-icons">
                {
                    socials.map((link) => {
                        const {id, url, icon} = link;
                        return (
                        
                            <li key={id}>
                                <a href={url}>
                                    {icon}
                                </a>
                            </li>
                       
                        )
                    })
                }
                 </div>
            </ul>
           
        </aside>
    )
}

export default Sidebar;