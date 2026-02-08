'use client';

import CarsCard from './CarsCard';
import styles from './FeaturedCars.module.css';

export default function FeaturedCars() {
  const vehicles = [
    {
      id: 1,
      name: 'BMW X5 M Sport',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      badge: 'Novo',
      fuel: 'Híbrido',
      mileage: '0 km',
      transmission: 'Automático',
      price: 'R$ 589.900',
    },
    {
      id: 2,
      name: 'Mercedes-Benz AMG GT',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      badge: 'Destaque',
      fuel: 'Gasolina',
      mileage: '12.500 km',
      transmission: 'Automático',
      price: 'R$ 1.245.000',
    },
    {
      id: 3,
      name: 'Audi RS e-tron GT',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      badge: 'Elétrico',
      fuel: 'Elétrico',
      mileage: '0 km',
      transmission: 'Automático',
      price: 'R$ 899.900',
    },
    {
      id: 4,
      name: 'Porsche 911 Carrera',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      badge: 'Premium',
      fuel: 'Gasolina',
      mileage: '8.900 km',
      transmission: 'Automático',
      price: 'R$ 785.000',
    },
    {
      id: 5,
      name: 'Range Rover Sport',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      badge: 'Luxo',
      fuel: 'Diesel',
      mileage: '0 km',
      transmission: 'Automático',
      price: 'R$ 689.900',
    },
    {
      id: 6,
      name: 'Tesla Model S Plaid',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      badge: 'Tecnologia',
      fuel: 'Elétrico',
      mileage: '0 km',
      transmission: 'Automático',
      price: 'R$ 925.000',
    },
  ];

  return (
    <section className={`${styles.section} section`} id="veiculos">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.subtitle}>Nossa Coleção</span>
            <h2 className={styles.title}>Veículos em Destaque</h2>
            <p className={styles.description}>
              Seleção premium dos melhores veículos de luxo e performance disponíveis
            </p>
          </div>

          <div className={styles.filters}>
            <button className={`${styles.filterButton} ${styles.filterActive}`}>Todos</button>
            <button className={styles.filterButton}>SUVs</button>
            <button className={styles.filterButton}>Sedãs</button>
            <button className={styles.filterButton}>Esportivos</button>
            <button className={styles.filterButton}>Elétricos</button>
          </div>
        </div>

        <div className={styles.grid}>
          {vehicles.map((vehicle) => (
            <CarsCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <div className={styles.footer}>
          <a href="#veiculos" className={styles.viewAllButton}>
            Ver Todos os Veículos
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.backgroundDecor}>
        <div className={styles.decorShape1}></div>
        <div className={styles.decorShape2}></div>
      </div>
    </section>
  );
}
