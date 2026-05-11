import { useTheme, useScrollSpy } from './hooks';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import styles from './App.module.css';

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className={styles.app}>
      <Navbar
        theme={theme}
        onThemeToggle={toggleTheme}
        activeSection={activeSection}
      />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
