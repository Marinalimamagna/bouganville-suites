import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsappButton() {
  // Número real do hotel (DDD + Número)
  const phoneNumber = "553196389641"; 
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a disponibilidade de reservas no Bouganville Suítes.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-container">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-flutuante"
        aria-label="Conversar no WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default WhatsappButton;