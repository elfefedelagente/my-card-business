import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/portfolio.module.css';

type ImageType = {
  src: string;
  alt: string;
  desc: string;
};

const images: ImageType[] = [
  { src: "/my-card-business/images/InicioSesión.png", alt: "Inicio de sesión", desc: "Pantalla de inicio de sesión" },
  { src: "/my-card-business/images/CreaciónUsuario.png", alt: "Creación de usuario", desc: "Pantalla de creación de usuario" },
  { src: "/my-card-business/images/VisualizaciónUsuarios.png", alt: "Vista de usuarios", desc: "Visualización de usuarios" },
  { src: "/my-card-business/images/TiposDeDatos.png", alt: "Datos soportados", desc: "Tipos de datos soportados" },
  { src: "/my-card-business/images/NotificaciónTelegram.png", alt: "Vinculación con telegram", desc: "Notificación vía Telegram" },
  { src: "/my-card-business/images/CargaDeDatos.png", alt: "Carga de tipos de datos aceptados", desc: "Carga de datos aceptados" },
  { src: "/my-card-business/images/ManipulaciónNodos.png", alt: "Panel de nodos", desc: "Manipulación de nodos en el sistema" },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.title}><strong>Red de monitoreo ambiental <br /> Rio Chubut</strong></h1>
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

