import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/portfolio.module.css';

type ImageType = {
  src: string;
  alt: string;
  desc: string;
};

const images: ImageType[] = [
  { src: "/images/InicioSesión.png", alt: "Inicio de sesión", desc: "Pantalla de inicio de sesión" },
  { src: "/images/CreaciónUsuario.png", alt: "Creación de usuario", desc: "Pantalla de creación de usuario" },
  { src: "/images/VisualizaciónUsuarios.png", alt: "Vista de usuarios", desc: "Visualización de usuarios" },
  { src: "/images/TiposDeDatos.png", alt: "Datos soportados", desc: "Tipos de datos soportados" },
  { src: "/images/NotificaciónTelegram.png", alt: "Vinculación con telegram", desc: "Notificación vía Telegram" },
  { src: "/images/CargaDeDatos.png", alt: "Carga de tipos de datos aceptados", desc: "Carga de datos aceptados" },
  { src: "/images/ManipulaciónNodos.png", alt: "Panel de nodos", desc: "Manipulación de nodos en el sistema" },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className={styles.portfolioContainer}>
      <h1>Red de monitoreo ambiental Rio Chubut</h1>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={styles.imageWrapper}
            whileHover={{ scale: 1.2 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <button
                className={styles.viewButton}
                onClick={() => setSelectedImage(image)}
              >
                🔍 Ver
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.desc}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

