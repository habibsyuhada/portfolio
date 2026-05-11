import styles from './Modal.module.css';
import { useEffect } from 'react';

export default function Modal({ children, isOpen, onClose }) {
  // Handle escape key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.backdrop} ${styles['backdrop-show']}`} onClick={onClose}>
      <div className={`${styles.modal} ${styles['modal-show']}`} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}