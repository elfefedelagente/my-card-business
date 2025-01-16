import { useState } from 'react';
import { motion } from 'framer-motion';
import emailJs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(`Campo cambiado: ${name}, Valor: ${value}`);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = (data: typeof formData): boolean => {
        
        if (!data.name.trim()) {
            toast.error('Por favor, ingresa tu nombre.');
            return false;
        }
        if (!data.email.trim()) {
            toast.error('Por favor, ingresa tu correo electrónico.');
            return false;
        }
        if (!data.message.trim()) {
            toast.error('Por favor, ingresa un mensaje.');
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const { name, email, message } = formData;

        if (!validateForm(formData)) return;

        emailJs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    to_name: 'Federico',
                    from_name: name, 
                    email, 
                    mensaje: message,
                },
                import.meta.env.VITE_EMAILJS_USER_ID 
            )
            .then(
                () => {
                    toast.success('Mensaje enviado con éxito');
                    setFormData({ name: '', email: '', message: '' });
                },
                (err) =>   toast.error('Error al enviar el mensaje: ' + err.text)
            );    
    };
    
    return (
        <>  
            <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={false}
            pauseOnHover
            draggable
            theme="colored"
        />
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2}}
        >
            <motion.h1
                className={styles.title}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Contáctame
            </motion.h1>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
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
    </>
    );
};
export default Contact;
