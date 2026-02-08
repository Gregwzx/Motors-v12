'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.topSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brandColumn}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 12V28M12 20H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className={styles.logoText}>
                  <strong>PREMIUM</strong> MOTORS
                </span>
              </div>
              <p className={styles.brandDescription}>
                Há mais de 20 anos realizando sonhos e conectando pessoas aos melhores veículos do mercado.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>Navegação</h4>
              <ul className={styles.linksList}>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#veiculos">Veículos</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h4 className={styles.columnTitle}>Serviços</h4>
              <ul className={styles.linksList}>
                <li><a href="#">Financiamento</a></li>
                <li><a href="#">Avaliação</a></li>
                <li><a href="#">Garantia</a></li>
                <li><a href="#">Seguro</a></li>
                <li><a href="#">Test Drive</a></li>
              </ul>
            </div>

            <div className={styles.contactColumn}>
              <h4 className={styles.columnTitle}>Contato</h4>
              <ul className={styles.contactList}>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34419 3.29018 4.43655 4.6967 3.03099C6.10322 1.62548 8.01088 0.833328 10 0.833328C11.9891 0.833328 13.8968 1.62548 15.3033 3.03099C16.7098 4.43655 17.5 6.34419 17.5 8.33333Z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="10" cy="8.33333" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>Av. Paulista, 1000<br/>São Paulo - SP</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.26 16.7478 18.2876 16.5167 18.2667C13.9523 17.9881 11.4891 17.1118 9.32498 15.7084C7.31151 14.4289 5.60443 12.7218 4.32499 10.7084C2.91663 8.53438 2.04019 6.05916 1.76665 3.48337C1.74583 3.25293 1.77321 3.02067 1.84707 2.80139C1.92092 2.58211 2.03963 2.38064 2.19562 2.2098C2.35162 2.03897 2.54149 1.90219 2.75314 1.80878C2.9648 1.71536 3.19345 1.6672 3.42498 1.66671H5.92499C6.32953 1.66281 6.72148 1.80594 7.028 2.06965C7.33452 2.33336 7.53155 2.69959 7.58332 3.10004C7.68011 3.90009 7.86283 4.68604 8.12499 5.44171C8.2402 5.74453 8.26512 6.07426 8.19672 6.39049C8.12832 6.70672 7.96948 6.99522 7.73748 7.22087L6.69165 8.26671C7.87085 10.3614 9.63869 12.1292 11.7333 13.3084L12.7792 12.2625C13.0048 12.0305 13.2933 11.8717 13.6095 11.8033C13.9258 11.7349 14.2555 11.7598 14.5583 11.875C15.314 12.1372 16.1 12.3199 16.9 12.4167C17.3048 12.4688 17.6746 12.6694 17.9386 12.9814C18.2027 13.2934 18.3435 13.6913 18.3333 14.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>(11) 3456-7890</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33334 3.33337H16.6667C17.5833 3.33337 18.3333 4.08337 18.3333 5.00004V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33334C2.41668 16.6667 1.66668 15.9167 1.66668 15V5.00004C1.66668 4.08337 2.41668 3.33337 3.33334 3.33337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.3333 5L10 10.8333L1.66666 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>contato@premiummotors.com.br</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Premium Motors. Todos os direitos reservados.
            </p>
            <div className={styles.legalLinks}>
              <a href="#">Política de Privacidade</a>
              <span className={styles.separator}>•</span>
              <a href="#">Termos de Uso</a>
              <span className={styles.separator}>•</span>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}