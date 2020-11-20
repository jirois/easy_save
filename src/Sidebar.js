import React from 'react';
import {links, social } from './data';
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <aside  className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <button onClick={closeSidebar} className="btn close-sidebar-btn">
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {
                    links.map((link) => {
                        const {id, url, text} = link;
                        return (
                            <li key={id}>
                                <a href={url}>
                                    {text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="social">
                {
                    social.map((link) => {
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
            </ul>
           
        </aside>
    )
}

export default Sidebar;