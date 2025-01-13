import { motion } from "framer-motion";
import style from "../styles/init.module.css"

const BackgroundAnimation = () => {
  return (
    <motion.div
      className={style.backgroundAnimated}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default BackgroundAnimation;
