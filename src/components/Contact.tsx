import { useState } from 'react';
import { motion } from 'framer-motion';
import emailJs from 'emailjs-com';
import styles from '../styles/contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        emailJs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // Tu Service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Tu Template ID
                {
                    to_name: 'Federico', // Destinatario fijo
                    from_name: name, // Nombre del remitente
                    email, // Email del remitente
                    mensaje: message, // Mensaje del remitente
                },
                import.meta.env.VITE_EMAILJS_USER_ID // Tu User ID
            )
            .then(
                () => {
                    alert('Mensaje enviado con éxito');
                    setFormData({ name: '', email: '', message: '' }); // Resetea el formulario
                },
                (err) => alert('Error al enviar el mensaje: ' + err.text)
            );
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.container}
        >
            <motion.h1
                className={styles.title}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Contáctame
            </motion.h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <motion.div
                    className={styles.formGroup}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <label htmlFor="name" className={styles.label}>
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className={styles.input}
                    />
                </motion.div>
                <motion.div
                    className={styles.formGroup}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <label htmlFor="email" className={styles.label}>
                        Correo Electrónico:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Tu correo electrónico"
                        required
                        className={styles.input}
                    />
                </motion.div>
                <motion.div
                    className={styles.formGroup}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <label htmlFor="message" className={styles.label}>
                        Mensaje:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí"
                        required
                        className={styles.textarea}
                    />
                </motion.div>
                <motion.button
                    type="submit"
                    className={styles.button}
                >
                    Enviar
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Contact;
