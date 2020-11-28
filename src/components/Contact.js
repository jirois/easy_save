import React from 'react';

const Contact = () => {
    return (
        <article className="contact">
            <h2>Contact Us</h2>
            <div className="underline"></div>
        <form className="contact-form">
            <h4>reach out to us today</h4>
           <div className="form-control">
                <label for="name">Your Full Name:</label>
                <input type="text" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-control">
                <label for="name">Your Email:</label>
                <input type="text" name="name" placeholder="Enter your email" />
            </div>
            <div className="form-control">
                <label for="message">Message:</label>
                <textarea name="message" placeholder="Start typing..." ></textarea>
            </div>
            <div className="btn-container">
                <button className="btn submit-btn" type="submit">Send</button>
            </div>
        </form>
        </article>
    )
}

export default Contact;