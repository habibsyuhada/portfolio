import styles from './Section.module.css';

export default function Section({ id, title, className = '', children, alternate = false }) {
  const classNames = [
    styles.section,
    alternate ? styles.alt : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={classNames}>
      <div className={"container " + styles.container}>
        {title && (
          <div className={styles.header}>
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
