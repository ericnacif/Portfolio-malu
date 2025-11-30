'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar rolagem para diminuir a navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.navContainer} ${scrolled ? styles.navContainerScrolled : ''}`}
    >
      <div className={styles.content}>
        
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden absolute left-6 text-malu-purple">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Links Esquerda (Desktop) */}
        <div className={`hidden lg:flex ${styles.linksLeft}`}>
           <a href="#projetos" className={styles.navLink}>Projetos</a>
           <a href="#sobre" className={styles.navLink}>Sobre</a>
        </div>

        {/* LOGO CENTRALIZADA MAIOR */}
        <div className={styles.logoWrapper}>
          <Logo className="h-full w-auto" />
        </div>
        
        {/* Links Direita (Desktop) */}
        <div className={`hidden lg:flex ${styles.linksRight}`}>
           <a href="#servicos" className={styles.navLink}>Serviços</a>
           <button className={styles.ctaButton}>Contato</button>
        </div>
      </div>
    </motion.nav>
  );
};