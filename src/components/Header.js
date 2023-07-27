import React from 'react';

// Imagens
import Logo from '../assets/logo.png'

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='/'>
          <img src={Logo} alt='' />
        </a>

        {/* Botão */}
        <button className='btn btn-sm'>Trabalhe comigo</button>
      </div>
    </div>
  </header>
  );
};

export default Header;
