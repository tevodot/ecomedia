import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado durante a 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> com muita dedicação.
      </p>
    </FooterBase>
  );
}

export default Footer;
