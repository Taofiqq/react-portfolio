import React, {useState} from 'react'
import './contact.scss'

const Contact = () => {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
           <div className="left">
               <img src="resource/shake.svg" alt="" />
           </div>
           <div className="right">
               <h2>Contact Me</h2>
               <form onSubmit={handleSubmit}>
                   <input type="text" placeholder="Email" />
                   <textarea placeholder="Message"></textarea>
                   <button className="btn-grad" type="submit">Send</button>
                   {message && <span>Thank you for reaching out. I will reply as soon as possible. </span>}
               </form>
           </div>
        </div>
    )
}

export default Contact;
