import { motion } from "motion/react";
import { useEffect } from "react";

const Toast = ({ message, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 2500);

    return () => clearTimeout(timer);
  }, [message, onDismiss]);

  return (
    <motion.div
      className="toast-notification fixed left-1/2 top-2 z-50 -translate-x-1/2 rounded-xs bg-dark px-2.5 py-0.5 text-xs text-light opacity-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span>{message}</span>
      <button
        onClick={onDismiss}
        className="ml-2 text-lg font-bold text-light focus:outline-hidden"
      >
        &times;
      </button>
    </motion.div>
  );
};

export default Toast;
