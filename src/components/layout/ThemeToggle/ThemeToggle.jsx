import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}
