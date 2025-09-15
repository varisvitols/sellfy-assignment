import styles from './Modal.module.css';
import { RiCloseFill as CloseIcon } from 'react-icons/ri';

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
  closeModal?: () => void;
}

export default function Modal({ children, isOpen, closeModal }: Props) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={closeModal}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
}
