'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsSection.module.css';

const projects = [
  { id: 1, title: "Residência Aurora", category: "Residencial" },
  { id: 2, title: "Interiores Loft", category: "Design de Interiores" },
  { id: 3, title: "Clínica Bem-Estar", category: "Comercial" },
  { id: 4, title: "Apartamento Vista", category: "Reforma" },
];

// Variantes para o container (controla o stagger dos filhos)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre cada cartão
      delayChildren: 0.3,
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const ProjectsSection = () => {
  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className={styles.header}
        >
          <span className={styles.subTitle}>Portfolio Selecionado</span>
          <h2 className={styles.title}>Nossos Projetos</h2>
          <div className={styles.divider}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.grid}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} category={project.category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};