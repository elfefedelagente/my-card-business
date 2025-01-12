import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Asumiendo que usas react-scroll
import style from "../styles/menuNav.module.css"; // Cambia esto según tu estructura

const NavBar = () => {
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4 },
    }),
  };

  return (
    <div>
      <nav className={style.nav}>
        <ul>
          {[
            { id: "inicio", label: "Inicio" },
            { id: "acerca-de-mi", label: "Acerca de mí" },
            { id: "habilidades", label: "Habilidades" },
            { id: "mis-proyectos", label: "Mis proyectos" },
            { id: "contacto", label: "Contacto" },
          ].map((item, index) => (
            <motion.li
              key={item.id}
              variants={menuVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ listStyle: "none" }}
            >
              <Link to={item.id} smooth={true} duration={500}>
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
