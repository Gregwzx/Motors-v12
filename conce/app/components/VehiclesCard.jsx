'use client';

import styles from './VehicleCard.module.css';

export default function VehicleCard({ vehicle }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={vehicle.image} alt={vehicle.name} className={styles.image} />
        <div className={styles.badge}>{vehicle.badge}</div>
        <div className={styles.favoriteButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" 
                  stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{vehicle.name}</h3>
          <p className={styles.year}>{vehicle.year}</p>
        </div>

        <div className={styles.specs}>
          <div className={styles.spec}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L13 8L19 9L14.5 13.5L15.5 19.5L10 16.5L4.5 19.5L5.5 13.5L1 9L7 8L10 2Z" fill="currentColor"/>
            </svg>
            <span>{vehicle.fuel}</span>
          </div>
          <div className={styles.spec}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>{vehicle.mileage}</span>
          </div>
          <div className={styles.spec}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M7 7V5C7 3.89543 7.89543 3 9 3H11C12.1046 3 13 3.89543 13 5V7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>A partir de</span>
            <span className={styles.priceValue}>{vehicle.price}</span>
          </div>
          <a href="#contato" className={styles.detailsButton}>
            Ver Detalhes
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}