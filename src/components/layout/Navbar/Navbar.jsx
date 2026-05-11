import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { scrollToSection } from '../../../hooks/useScrollSpy';
import styles from './Navbar.module.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ theme, onThemeToggle, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.content}>
          <a href="#home" className={styles.logo} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            HS
          </a>

          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            <button
              className={styles.mobileToggle}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
