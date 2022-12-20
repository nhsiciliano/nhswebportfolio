import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import { useContext } from 'react';


const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef();

    const [contactInfo, setContactInfo] = useState({
        user_name: "",
        user_subject: "",
        user_email: "",
        message: ""
    });

    const handleChange = (e) => {
        setContactInfo({...contactInfo, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setContactInfo({ user_name: "", user_subject: "", user_email: "", message: ""})
        emailjs
        .sendForm('service_e6sutb3', 'template_pcna2i8', formRef.current, 'Eg8GylH3wOseK9nDp')
        .then((result) => {
            console.log(result.text);
            alert("Thank you for your message! I will answer you as soon as possible!");
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your proyect.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone} 
                                alt=""
                                className="c-icon"
                            />
                            +54 9 11 3155 2925
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email} 
                                alt=""
                                className="c-icon"
                            />
                            nhsiciliano@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address} 
                                alt=""
                                className="c-icon"
                            />
                            4762 Diaz Velez Av, Buenos Aires, Argentina
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for freelancing
                        if the right proyect comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} 
                            type="text" 
                            placeholder='Name'
                            id='user_name' 
                            name="user_name"
                            value={contactInfo.user_name}
                            onChange={handleChange} />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} 
                            type="text" 
                            placeholder='Subject' 
                            id='user_subject'
                            name="user_subject"
                            value={contactInfo.user_subject}
                            onChange={handleChange} />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} 
                            type="text" 
                            placeholder='Email'
                            id='user_email'
                            name="user_email" 
                            value={contactInfo.user_email}
                            onChange={handleChange}/>
                        <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} 
                            rows="5" 
                            placeholder='Message'
                            id='message'
                            name="message"
                            value={contactInfo.message}
                            onChange={handleChange} />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact