import { useEffect } from "react";
import ReactDOM from "react-dom";

const CustomModal = ({ open, onClose, children }) => {
  useEffect(() => {
    // Disable background scrolling when modal is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to restore overflow on unmount or when modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90dvh] min-h-[90dvh] w-11/12 max-w-md overflow-hidden rounded bg-light text-xs leading-none text-dark shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-1 top-0.5 h-fit cursor-none text-lg font-bold leading-none text-dark focus:outline-none"
          data-click="true"
          onClick={onClose}
        >
          &times;
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
};

export default CustomModal;
