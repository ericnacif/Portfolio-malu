import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    // Adicionado scroll-smooth globalmente aqui
    <main className="scroll-smooth selection:bg-malu-purple selection:text-white">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
    </main>
  );
}