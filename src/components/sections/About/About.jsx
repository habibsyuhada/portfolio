import { FaMapMarkerAlt, FaEnvelope, FaCode } from 'react-icons/fa';
import { personalInfo } from '../../../data/personalInfo';
import Section from '../../ui/Section/Section';
import styles from './About.module.css';

export default function About() {
  const infoItems = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: FaCode,
      label: 'Experience',
      value: personalInfo.experience.description
    }
  ];

  return (
    <Section id="about" title="About Me">
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <span className={styles.initials}>HS</span>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.intro}>
            {personalInfo.about}
          </p>

          <div className={styles.details}>
            {infoItems.map((item, index) => (
              <div key={index} className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <item.icon />
                </div>
                <div className={styles.detailContent}>
                  <span className={styles.detailLabel}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={styles.detailValue}>{item.value}</a>
                  ) : (
                    <span className={styles.detailValue}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
