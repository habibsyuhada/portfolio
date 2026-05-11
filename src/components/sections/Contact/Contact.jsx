import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../../data/personalInfo';
import Section from '../../ui/Section/Section';
import styles from './Contact.module.css';

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: personalInfo.location,
      description: 'Based in Indonesia'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'habibsyuhada',
      link: personalInfo.social.github,
      description: 'Check out my repositories'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Habib Syuhada',
      link: personalInfo.social.linkedin,
      description: 'Let\'s connect professionally'
    }
  ];

  return (
    <Section id="contact" title="Get In Touch" alternate>
      <div className={styles.content}>
        <p className={styles.intro}>
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className={styles.methods}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className={styles.method}
              target={method.link ? '_blank' : undefined}
              rel={method.link ? 'noopener noreferrer' : undefined}
            >
              <div className={styles.methodIcon}>
                <method.icon />
              </div>
              <div className={styles.methodContent}>
                <h3 className={styles.methodTitle}>{method.title}</h3>
                <p className={styles.methodValue}>{method.value}</p>
                <p className={styles.methodDescription}>{method.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
