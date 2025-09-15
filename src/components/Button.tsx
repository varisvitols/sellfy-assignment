import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
  color?: string;
}

export default function Button({ children, onClick, icon, color }: Props) {
  return (
    <button
      className={`${icon && styles['has-icon']} ${styles.button}`}
      onClick={onClick}
      style={{ color, borderColor: color }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
    </button>
  );
}
