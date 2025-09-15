import styles from './OptionsMenu.module.css';
import { RiShareForwardFill as ShareIcon } from 'react-icons/ri';
import { RiDeleteBin2Fill as DeleteIcon } from 'react-icons/ri';

interface Props {
  onShareClick: () => void;
  onDeleteClick: () => void;
  position: { x: number; y: number };
}

export default function OptionsMenu({
  onShareClick,
  onDeleteClick,
  position,
}: Props) {
  return (
    <div
      className={styles.options}
      style={{ left: position.x, top: position.y }}
    >
      <button className={styles.option} onClick={onShareClick}>
        <div>
          <ShareIcon className={styles.icon} />
        </div>
        <div className={styles.text}>Share</div>
      </button>
      <button className={`${styles.option} danger`} onClick={onDeleteClick}>
        <div>
          <DeleteIcon className={styles.icon} />
        </div>
        <div className={styles.text}>Delete</div>
      </button>
    </div>
  );
}
