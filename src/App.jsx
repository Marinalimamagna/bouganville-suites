import React, { useState } from 'react';
import { 
  FaWifi, 
  FaBed, 
  FaParking, 
  FaClock, 
  FaFileAlt, 
  FaInstagram, 
  FaFacebookF, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const urlMotorReservas = "https://api.whatsapp.com/send/?phone=553196389641&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+disponibilidade+de+reservas+no+Bouganville+Su%C3%ADtes.&type=phone_number&app_absent=0";

  const handleDirectReservation = () => {
    window.open(urlMotorReservas, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* BOTÃO FLUTUANTE DO WHATSAPP COM CLASSE DE AJUSTE MOBILE */}
      <a 
        href={urlMotorReservas}
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-zap-flutuante"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '34px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
        aria-label="Chamar no WhatsApp"
      >
        <FaWhatsapp />
      </a>
      
      {/* HEADER BOUTIQUE */}
      <header className="main-header">
        <div className="container header-container">
          
          <div className="logo-identity">
            <img src="/LOGOREDONO-.png" alt="Logo Bouganville" className="logo-img-centro" />
            <div className="logo-titles">
              <h1>BOUGANVILLE</h1>
              <span>SUÍTES</span>
            </div>
          </div>

          <button className="hamburger-btn" onClick={() => setMenuAberto(!menuAberto)} aria-label="Menu">
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav-menu ${menuAberto ? 'active' : ''}`}>
            <ul>
              <li><a href="#sobre" onClick={() => setMenuAberto(false)}>O Hotel</a></li>
              <li><a href="#quartos" onClick={() => setMenuAberto(false)}>Acomodações</a></li>
              <li><a href="#comodidades" onClick={() => setMenuAberto(false)}>Diferenciais</a></li>
              <li><a href="#localizacao" onClick={() => setMenuAberto(false)}>Localização</a></li>
              <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
            </ul>
          </nav>

          <div className="header-actions"></div>

        </div>
      </header>

      {/* HERO BANNER */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag">HOSPEDAGEM EXCLUSIVA EM CONCEIÇÃO DO MATO DENTRO</span>
          <h2><br />Sua experiência de descanso começa aqui. Sofisticação, conforto e hospitalidade em um só lugar</h2>
          <div className="hero-divider"></div>
          <p>Mais do que uma hospedagem: uma experiência de exclusividade, bem-estar e excelência em cada detalhe.</p>
          <button onClick={handleDirectReservation} className="btn-premium-hero">
            RESERVAR SUA SUÍTE
          </button>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="sobre-section">
        <div className="container split-sobre">
          <div className="sobre-conteudo-texto">
            <span className="section-subtitle">Sobre </span>
            <h2>Sua Casa Fora de Casa </h2>
            <div className="divider"></div>
            <div className="sobre-text">
              <p>Se você busca conforto superior, praticidade inteligente e aconchego genuíno, o <strong>Bouganville Suítes</strong> é o seu destino ideal na região. Situado estrategicamente a apenas 700 metros do centro comercial e histórico da cidade.</p>
              <p>Nossa estrutura conta com pouquíssimas unidades, garantindo tranquilidade e o ambiente perfeito tanto para casais exigentes quanto para executivos em estadias corporativas de alto nível.</p>
            </div>
          </div>
          
          <div className="sobre-imagem-wrapper">
            <img 
              src="/hotel principal.png" 
              alt="Fachada Bouganville Suítes" 
              className="sobre-img-hotel" 
            />
          </div>
        </div>
      </section>

      {/* ACOMODAÇÕES */}
      <section id="quartos" className="quartos-section">
        <div className="container">
          <div className="section-title-block">
            <span className="section-subtitle">ACOMODAÇÕES PLANEJADAS</span>
            <h2>Nossas Suítes Disponíveis</h2>
            <div className="center-divider"></div>
            <p>Unidades modernas e equipadas com enxoval, cozinha funcional completa com utensílios, bancada americana, armários e banheiro privativo.</p>
          </div>
          
          {/* GRID DE QUARTOS */}
          <div className="quartos-grid">
            <div className="quarto-card" onClick={handleDirectReservation}>
              <div className="quarto-img-wrapper">
                <img src="/quarto (1).jpeg" alt="Suíte Conforto" />
                <div className="quarto-badge">Reservar Suite</div>
              </div>
              <div className="quarto-info">
                <span>SUÍTE 01</span>
                <h3>Suíte Conforto</h3>
                <p>Ambiente minimalista e relaxante com cama box casal, enxoval completo, cortinas blackout e frigobar de apoio.</p>
                <span className="quarto-link">Ver detalhes e disponibilidade →</span>
              </div>
            </div>

            <div className="quarto-card" onClick={handleDirectReservation}>
              <div className="quarto-img-wrapper">
                <img src="/foto cadeira.png" alt="Suíte Master Executiva" />
                <div className="quarto-badge">Reservar Suite</div>
              </div>
              <div className="quarto-info">
                <span>SUÍTE 02</span>
                <h3>Master Executiva</h3>
                <p>Otimizada para o público corporativo. Inclui estação de trabalho dedicada, cadeira ergonômica de alto conforto e internet de alta velocidade.</p>
                <span className="quarto-link">Ver detalhes e disponibilidade →</span>
              </div>
            </div>

            <div className="quarto-card" onClick={handleDirectReservation}>
              <div className="quarto-img-wrapper">
                <img src="/quarto (3).jpeg" alt="Suíte Premium Elegance" />
                <div className="quarto-badge">Reservar Suite</div>
              </div>
              <div className="quarto-info">
                <span>SUÍTE 03</span>
                <h3>Premium Elegance</h3>
                <p>Unidade planejada para estadias perfeitas, integrando uma excelente iluminação, design sóbrio e máximo aconchego.</p>
                <span className="quarto-link">Ver detalhes e disponibilidade →</span>
              </div>
            </div>

            <div className="quarto-card" onClick={handleDirectReservation}>
              <div className="quarto-img-wrapper">
                <img src="/cozinha.png" alt="Suíte Studio Integrada" />
                <div className="quarto-badge">Reservar Suite</div>
              </div>
              <div className="quarto-info">
                <span>SUÍTE 04</span>
                <h3>Studio Integrada</h3>
                <p>Sofisticado conceito aberto que integra harmonicamente a área de descanso com uma cozinha planejada completa e utensílios gourmet.</p>
                <span className="quarto-link">Ver detalhes e disponibilidade →</span>
              </div>
            </div>
          </div>

          {/* COMPONENTES DE SERVIÇOS */}
          <div id="comodidades" className="comodidades-container">
            <h3>Uma Experiência Sem Preocupações</h3>
            <ul className="comodidades-lista">
              <li>
                <div className="icon-box"><FaWifi /></div>
                <div>
                  <strong>Wi-Fi de Alta Performance</strong>
                  <span>Conexão estável e de alta velocidade em todos os quartos, ideal para trabalho .</span>
                </div>
              </li>
              <li>
                <div className="icon-box"><FaBed /></div>
                <div>
                  <strong>Enxoval de Hotelaria</strong>
                  <span>Roupa de cama inclusa com fios nobres e higienização rigorosa.</span>
                </div>
              </li>
              <li>
                <div className="icon-box"><FaParking /></div>
                <div>
                  <strong>Estacionamento Cortesia</strong>
                  <span>Vagas privativas internas e gratuitas diretamente no local para sua total segurança.</span>
                </div>
              </li>
              <li>
                <div className="icon-box"><FaClock /></div>
                <div>
                  <strong>Atendimento Prático</strong>
                  <span>Suporte humanizado e focado nas suas necessidades disponível das 08h às 22h.</span>
                </div>
              </li>
              <li>
                <div className="icon-box"><FaFileAlt /></div>
                <div>
                  <strong>Praticidade Corporativa</strong>
                  <span>Oferecemos contratos flexíveis, emissão rápida de notas fiscais e faturamento direto para empresas.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEÇÃO LOCALIZAÇÃO */}
      <section id="localizacao" className="localizacao-section">
        <div className="container">
          <div className="section-title-block">
            <span className="section-subtitle">Localização Estratégica</span>
            <h2>Onde Estamos Situados</h2>
            <div className="center-divider"></div>
            <p>A apenas 700 metros do centro comercial e histórico de Conceição do Mato Dentro - MG, num bairro tranquilo que preserva o seu sossego.</p>
          </div>
          
          <div className="mapa-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3807212470715!2d-43.430030025791784!3d-19.00293690947623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAwJzEwLjYiUyA0M8KwMjUnMzkuMyJX!5e0!3m2!1spt-BR!2sbr!4v1717424000000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '4px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Bouganville Suítes"
            ></iframe>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer id="contato">
        <div className="container footer-grid">
          <div className="footer-coluna-logo">
            <div className="logo-footer">
              <img src="/LOGOREDONO-.png" alt="Logo Bouganville" className="logo-img-footer" />
              <h3>BOUGANVILLE</h3>
            </div>
            <p className="footer-descricao">Inovando o conceito de hotelaria urbana na região com o equilíbrio perfeito entre privacidade, requinte e sofisticação.</p>
            <div className="redes-sociais-footer">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            </div>
          </div>

          <div className="footer-coluna">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><a href="#sobre">O Hotel</a></li>
              <li><a href="#quartos">Acomodações</a></li>
              <li><a href="#comodidades">Diferenciais</a></li>
              <li><a href="#localizacao">Localização</a></li>
            </ul>
          </div>

          <div className="footer-coluna">
            <h4>Contato</h4>
            <ul className="footer-contato-info">
              <li><FaMapMarkerAlt style={{ marginRight: '8px', color: '#8fbd97' }} /> Bairro Jardim Bouganville, Conceição do Mato Dentro - MG</li>
              <li><FaWhatsapp style={{ marginRight: '8px', color: '#8fbd97' }} /> (31) 9638-9641</li>
              <li><FaEnvelope style={{ marginRight: '8px', color: '#8fbd97' }} /></li>
            </ul>
          </div>
        </div>

        <div className="footer-inferior">
          <div className="container">
            <p>© 2026 Bouganville Suítes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;