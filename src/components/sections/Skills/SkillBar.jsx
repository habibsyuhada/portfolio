import styles from './SkillBar.module.css';

export default function SkillBar({ skill }) {
  const Icon = skill.icon;

  return (
    <div className={styles.skillBar}>
      <div className={styles.skillInfo}>
        <div className={styles.skillIcon}>
          <Icon />
        </div>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
