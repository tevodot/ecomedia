import React from 'react';
import TemplatePage from '../../../components/TemplatePage';
import { Link } from 'react-router-dom';

function VideoRegister(){
    return(
      <TemplatePage> 
        <h1> 
          Página de cadastro
        </h1>
        <Link to="/cadastro/categoria"> Cadastrar Categoria</Link>
      </TemplatePage>
    )
  }


export default VideoRegister;