import { ReactNode } from "react";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16"
    stroke="currentColor" strokeWidth="2.5" fill="none">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Modal = ({ isVisible, onClose, children }: Props) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center
                backdrop-blur-sm bg-black/70 transition-opacity duration-[400ms]
                ${isVisible ? "opacity-100" : "opacity-0"}`}
  >
    <div
      className={`relative flex items-center justify-center
                  transition-all duration-[400ms]
                  ${isVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-90 translate-y-6"
                  }`}
    >
      <button
        onClick={onClose}
        className="absolute -top-3.5 -right-3.5 z-10 w-9 h-9 rounded-full
                   bg-white text-slate-600 shadow-lg border-2 border-slate-100
                   flex items-center justify-center cursor-pointer
                   transition-all duration-200
                   hover:bg-red-500 hover:text-white hover:border-red-500
                   hover:scale-110 hover:rotate-90"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {children}
    </div>
  </div>
);

export default Modal;
