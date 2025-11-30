'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import styles from './Hero.module.css';

// Variáveis de animação para os elementos de texto
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  })
};

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  
  // Efeitos de paralaxe mais suaves
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  return (
    <section ref={targetRef} className={styles.section}>
      {/* Backgrounds animados (respirando) e com paralaxe */}
      <motion.div 
        style={{ y: yBg }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={styles.bgBlurBlue} 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={styles.bgBlurGold} 
      />

      <div className={styles.container}>
        <motion.div initial="hidden" animate="visible">
          <motion.div custom={0} variants={fadeUpVariants} className={styles.tag}>
            Arquitetura & Interiores
          </motion.div>
          
          <motion.h1 custom={0.2} variants={fadeUpVariants} className={styles.title}>
            Projetando <br/>
            <span className={styles.underline}>sonhos.</span>
          </motion.h1>
          
          <motion.p custom={0.4} variants={fadeUpVariants} className={styles.description}>
            A harmonia perfeita entre a estética visual e o conforto funcional. Espaços assinados por Malu Milkovich.
          </motion.p>

          <motion.div custom={0.6} variants={fadeUpVariants} className={styles.buttonGroup}>
            <a href="#projetos" className={styles.buttonPrimary}>
              Ver Portfolio <ArrowRight size={20} />
            </a>
            <a href="#contato" className={styles.buttonSecondary}>Falar Conosco</a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yImg, opacity: opacityImg }} className="hidden lg:block relative">
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
             className={styles.imageFrame}
          >
              <div className={styles.imageInner}>Imagem Principal</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};