'use client';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

interface ProjectProps {
  title: string;
  category: string;
}

// Variante para o item individual da lista
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const ProjectCard = ({ title, category }: ProjectProps) => {
  return (
    <motion.div variants={itemVariants} className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* Placeholder para a imagem com efeito de zoom */}
        <div className={styles.imageBgPlaceholder}></div>
        
        <div className={styles.overlay}>
          <div>
            <h4 className={styles.cardTitle}>{title}</h4>
            <span className={styles.cardCategory}>{category}</span>
          </div>
          <button className={styles.detailsBtn}>Ver Projeto</button>
        </div>
      </div>
      
      <div className={styles.footerInfo}>
        <span className={styles.footerTitle}>{title}</span>
        <span className={styles.footerCat}>{category}</span>
      </div>
    </motion.div>
  );
};