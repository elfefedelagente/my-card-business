import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import React from "react";
import style from "../styles/init.module.css";

const ContactIcon: React.FC = () => {
  const phoneNumber = "+542804708799";
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Función para quitar el efecto hover después de hacer clic
  const removeHoverEffect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.remove(style.hoverEffect); // Asegúrate de tener esta clase en tu CSS
    setTimeout(() => target.classList.add(style.hoverEffect), 300); // Reaplica el efecto después
  };

  return (
    <div className={style.iconsContainer}>
      {/* Ícono de GitHub */}
      <a
        href="https://github.com/elfefedelagente"
        target="_blank"
        rel="noopener noreferrer"
        onClick={removeHoverEffect}
      >
        <FaGithub size={24} color="#FFFFFF" style={{ cursor: "pointer" }} />
      </a>

      {/* Ícono de LinkedIn */}
      <a
        href="https://www.linkedin.com/in/federico-caba%C3%B1a-17354822a/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={removeHoverEffect}
      >
        <FaLinkedin size={24} color="#0077b5" style={{ cursor: "pointer" }} />
      </a>

      {isMobile ? (
        <a
          href={`tel:${phoneNumber}`}
          rel="noopener noreferrer"
          onClick={removeHoverEffect}
        >
          <FaPhone size={24} color="#34C759" style={{ cursor: "pointer" }} />
        </a>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaPhone
            size={24}
            color="#34C759"
            style={{ cursor: "default", marginRight: "8px" }}
          />
          <span style={{ color: "#FFFFFF" }}>{phoneNumber}</span>
        </div>
      )}
    </div>
  );
};

export default ContactIcon;
