import { Inter } from "next/font/google";
/* import "style/globals.css"; */
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Valadares Fueta Advogaodos",
  description: "Serviço de ",
  keywords: "Serviços jurídicos para empresas, assessoria jurídica para agências de publicidade, serviços jurídicos para e-commerce, advogado para agências de publicidade, materiais jurídicos para agências de marketing, direito empresarial, direito digital, marketing digital",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
          <img src="/banner.svg" alt="" className="header__img"/>
          <div className="header__banner">
            <img src="/logo.svg" alt="logo Valadares Fueta Advogaodos" className="header__banner__logo"  />
            <div className="header__banner__texto">
              <p className="header__banner__texto__1">Sua empresa exige um</p>
              <p className="header__banner__texto__2">PARCEIRO JURÍDICO QUE ENTENDA SEUS DESAFIOS.</p>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="footer__container">
            <div className="footer__container__esquerdo">
              <div className="footer__container__esquerdo__acima">
                <img src="/logo_branco.svg" alt="" />
                <div className="footer__container__esquerdo__acima__termos">
                  <p>Termo de Privacidade</p>
                  <p>Termos de Uso</p>
                  <p>Política de Cookies</p>
                </div>
              </div>
              <ul className="footer__container__esquerdo__abaixo">
                <li>serviços jurídicos para empresas</li>
                <li>assessoria jurídica para agências de publicidade</li>
                <li>serviços jurídicos para e-commerce</li>
                <li>advogado para agências de publicidade</li>
                <li>materiais jurídicos para agências de marketing</li>
                <li>direito empresarial</li>
                <li>direito digital</li>
                <li>marketing digital</li>
              </ul>
            </div>
            <dir className="footer__container__direito">
              <p className="footer__container__direito__texto">Siga nas redes</p>
              <div className="footer__container__direito__redes">
                <img src="instagram.svg" alt="" />
                <img src="facebook.svg" alt="" />
                <img src="linkedin.svg" alt="" />
              </div>
              <p className="footer__container__direito__texto">Entre em contato</p>
              <div className="footer__container__direito__whatsapp">
                <img src="/whatsapp.svg" alt="" />
                <p>(21) 9654-50470</p>
              </div>
              <div className="footer__container__direito__email">
                <img src="/email.svg" alt="" />
                <p>contato@valadaresefueta.com.br</p>
              </div>
              <div className="footer__container__direito__localizacao">
                <img src="/localizacao.svg" alt="" />
                <div>
                  <p>Av. José Silva de Azevedo Neto, 200 – BL 04 – Sala 104 - O2 Corporate Barra - Barra da Tijuca - RJ, 22775-056.</p>
                </div>
              </div>
              <p className="footer__container__direito__texto">Atendemos em todo Brasil.</p>
            </dir>
          </div>
          <div className="footer__container__copyright">
            <p>© Copyright 2024 – Todos os Direitos Reservados VALADARES E FUETA ADVOGADOS Desenvolvido por VIRA NEGÓCIOS</p>
          </div>
        </footer>
      </body>

    </html>
  );
}
