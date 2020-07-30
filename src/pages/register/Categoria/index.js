import React from 'react';
import TemplatePage from '../../../components/TemplatePage';
import { Link } from 'react-router-dom';

function CategoryRegister(){
    return(
      <TemplatePage> 
        <h1> 
          Cadastro de categoria
        </h1>
        <Link to="/"> Ir para a página inicial</Link>
      </TemplatePage>
    )
  }


export default CategoryRegister;