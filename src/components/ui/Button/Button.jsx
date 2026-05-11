import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', size = 'md', icon, onClick, href, className = '', ...props }) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer" {...props}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} onClick={onClick} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
