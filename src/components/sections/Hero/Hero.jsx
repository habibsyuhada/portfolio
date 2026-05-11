import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../../data/personalInfo';
import { scrollToSection } from '../../../hooks/useScrollSpy';
import Button from '../../ui/Button/Button';
import CVNoticeModal from '../../../components/ui/Modal/CVNoticeModal';
import { useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [showCVNotice, setShowCVNotice] = useState(false);

  const handleDownloadCV = () => {
    setShowCVNotice(true);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.greeting}>Hello, I'm</p>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <h2 className={styles.title}>{personalInfo.title}</h2>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
            <div className={styles.actions}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                icon={<FaDownload />}
              >
                Download CV
              </Button>
            </div>
            <div className={styles.social}>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <div className={styles.imageInner}>
                <span className={styles.initials}>HS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine}></span>
      </div>

      {showCVNotice && (
        <CVNoticeModal
          linkedinUrl={personalInfo.social.linkedin}
          onClose={() => setShowCVNotice(false)}
        />
      )}
    </section>
  );
}
