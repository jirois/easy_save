import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
    const {isModalOpen, closeModal } = useGlobalContext()
    useEffect(()=> {
        const video = document.getElementById('modal-video')
        
    })
    return (
        <div 
        className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className="modal-container">
            <button onClick={closeModal} className="btn modal-btn"><FaTimes /></button>
            <iframe className="video-frame" 
            title="Our path"
            id="modal-video"
            src="https://www.youtube.com/embed/B3ah-FrpG4M?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
            </div> 
        </div>
    )
}

export default Modal;