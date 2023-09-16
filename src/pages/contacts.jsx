import React from 'react';
import Header from '../Components/Header.jsx';

function Contacts() {
  return (
    <div>
      <Header />
      <h1>Informações de Contato</h1>
      <ul>
        <li>Telefone: <a href="tel:+5587988199522">+55 (87) 9881-99522</a></li>
        <li>Email: <a href="mailto:jorge.gomes6793@gmail.com">jorge.gomes6793@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/jorge-gomes-dev/" target="_blank" rel="noopener noreferrer">Perfil do LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default Contacts;
