import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';


const ContactIcon: React.FC = () => {
    return(
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {/* Ícono de GitHub */}
            <a href="https://github.com/elfefedelagente" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color="#FFFFFF" />
            </a>

            {/* Ícono de LinkedIn */}
            <a href="https://www.linkedin.com/in/federico-caba%C3%B1a-17354822a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0077b5" />
            </a>
        </div>
    );
};
export default ContactIcon