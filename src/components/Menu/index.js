import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/index';

function Menu(){
    return(
        <nav className='Menu'>
            <a href='/'>
                <img className="Logo" src = {Logo} alt='Logo EcoMedia'/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Adicionar vídeo
            </Button>
        </nav>
    );
}

export default Menu;