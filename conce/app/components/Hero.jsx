'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Encontre seu',
      highlight: 'Veículo dos Sonhos',
      subtitle: 'Luxo, performance e tecnologia em cada detalhe',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80',
    },
    {
      title: 'Excelência em',
      highlight: 'Cada Quilômetro',
      subtitle: 'As melhores marcas e modelos do mercado',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80',
    },
    {
      title: 'Realize o',
      highlight: 'Impossível',
      subtitle: 'Financiamento facilitado e condições exclusivas',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&q=80',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.hero} id="inicio">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}></div>
        </div>
      ))}

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>{slides[currentSlide].title}</span>
            <span className={styles.titleHighlight}>{slides[currentSlide].highlight}</span>
          </h1>
          <p className={styles.subtitle}>{slides[currentSlide].subtitle}</p>
          
          <div className={styles.heroActions}>
            <a href="#veiculos" className={styles.primaryButton}>
              Explorar Veículos
            </a>
            <a href="#contato" className={styles.secondaryButton}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="currentColor"/>
              </svg>
              Ofertas Especiais
            </a>
          </div>
        </div>

        <div className={styles.slideIndicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className={styles.scrollIndicator}>
          <span>Descubra Mais</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className={styles.decorativeElements}>
        <div className={styles.decorCircle}></div>
        <div className={styles.decorLine}></div>
      </div>
    </section>
  );
}