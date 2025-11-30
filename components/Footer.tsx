'use client';

import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const Footer = () => {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.glow}></div>

      <motion.div 
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.container}
      >
        <div>
          {/* Logo branca no footer */}
          <Logo className="h-24 brightness-0 invert w-auto" />
          <p className={styles.description}>
            Transformamos espaços vazios em cenários de vida. Cada traço é pensado para refletir a sua essência.
          </p>
        </div>
        
        <div>
          <h4 className={styles.colTitle}>Contato</h4>
          <div className={styles.linkGroup}>
            <a href="mailto:contato@milkovich.arq.br" className={styles.link}>
              <div className={styles.iconBox}><Mail size={20} /></div>
              contato@milkovich.arq.br
            </a>
            <a href="#" className={styles.link}>
              <div className={styles.iconBox}><Phone size={20} /></div>
              (33) 99999-9999
            </a>
            <div className={styles.link}>
              <div className={styles.iconBox}><MapPin size={20} /></div>
              Manhuaçu, MG
            </div>
          </div>
        </div>

        <div>
          <h4 className={styles.colTitle}>Redes Sociais</h4>
          <div className={styles.socialRow}>
            <a href="#" className={styles.socialBtn}><Instagram size={24} /></a>
            <a href="#" className={styles.socialBtn}><Linkedin size={24} /></a>
          </div>
        </div>
      </motion.div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Malu Milkovich Arquitetura. Todos os direitos reservados.
      </div>
    </footer>
  );
};