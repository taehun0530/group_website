import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-on-dark hover:text-on-dark transition-colors outline-none"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
