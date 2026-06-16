import React from 'react';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container header-container">
        
        {/* Identidade corrigida: apenas BOUGANVILLE SUÍTES */}
        <div className="logo-identity">
          <img src="/LOGOREDONO-.png" alt="Logo Bouganville" className="logo-img-centro" />
          <div className="logo-titles">
            <h1>BOUGANVILLE</h1>
            <span>SUÍTES</span>
          </div>
        </div>

        {/* Menu de navegação limpo */}
        <nav className="nav-menu">
          <ul>
            <li><a href="#sobre">O Hotel</a></li>
            <li><a href="#quartos">Acomodações</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        {/* Lado direito mantido limpo e sem o botão de reserva */}
        <div className="header-actions"></div>

      </div>
    </header>
  );
}