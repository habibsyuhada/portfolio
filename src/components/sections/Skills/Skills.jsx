import { skillsCategories } from '../../../data/skills';
import Section from '../../ui/Section/Section';
import SkillBar from './SkillBar';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" alternate>
      <div className={styles.content}>
        {skillsCategories.map((category) => (
          <div key={category.id} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skills}>
              {category.items.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
