import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Newsletter from '@/components/Newsletter';
import Article from '@/components/Article';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <Benefits />
      <Newsletter />
      <Article />
      <Footer />
    </main>
  );
}
