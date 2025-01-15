import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import style from "../styles/init.module.css";

const ContactIcon: React.FC = () => {
    return(
        <div className={style.iconsContainer}>
            {/* Ícono de GitHub */}
            <a href="https://github.com/elfefedelagente" target="_blank" rel="noopener noreferrer">
            <FaGithub 
                size={24} 
                color="#FFFFFF" 
                style={{ cursor: 'pointer' }} 
            />
            </a>

            {/* Ícono de LinkedIn */}
            <a href="https://www.linkedin.com/in/federico-caba%C3%B1a-17354822a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin 
                    size={24} 
                    color="#0077b5" 
                    style={{ cursor: 'pointer' }} 
                />
            </a>
        </div>
    );
};
export default ContactIcon;