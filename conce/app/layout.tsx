export const metadata = {
  title: 'Premium Motors - Veículos de Luxo e Performance',
  description: 'A melhor concessionária de veículos premium. Encontre o carro dos seus sonhos com as melhores condições de financiamento.',
  keywords: 'carros de luxo, veículos premium, concessionária, BMW, Mercedes, Audi, Porsche',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}