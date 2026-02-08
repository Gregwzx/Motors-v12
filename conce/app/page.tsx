import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedVehicles from '../components/FeaturedVehicles';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedVehicles />
      <Footer />
    </main>
  );
}