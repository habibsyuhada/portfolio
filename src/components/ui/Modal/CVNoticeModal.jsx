import Modal from './Modal';
import styles from './CVNoticeModal.module.css';
import { FaLinkedin, FaTimes } from 'react-icons/fa';

export default function CVNoticeModal({ linkedinUrl, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>CV Download Notice</h2>
          <button
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.modalText}>
            To get my CV, please DM me on LinkedIn. I'll be happy to share it with you there!
          </p>

          <div className={styles.modalLinks}>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalButton}
            >
              <FaLinkedin /> Visit my LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}