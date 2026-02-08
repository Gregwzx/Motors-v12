import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import Footer from './components/Footer';
import './styles/globals.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedCars />
      <Footer />
    </main>
  );
}