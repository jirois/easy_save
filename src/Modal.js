import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
    const {isModalOpen, closeModal } = useGlobalContext()
    return (
        <div 
        className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className="modal-container">
            <button onClick={closeModal} className="btn modal-btn"><FaTimes /></button>
            <iframe className="video-frame" 
            title="Our path"
            src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
            </div> 
        </div>
    )
}

export default Modal;