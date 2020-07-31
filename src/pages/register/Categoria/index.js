/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import TemplatePage from '../../../components/TemplatePage';
// eslint-disable-next-line import/no-named-as-default-member
import FormField from '../../../components/FormField';

function CategoryRegister() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresInicias);

  function setValues(keyCode, values) {
    setValores({
      ...valores,
      [keyCode]: values,
    });
  }

  function handleChange(infos) {
    setValues(
      infos.target.getAttribute('name'),
      infos.target.value,
    );
  }

  useEffect(() => {
    const URL_MANEIRA = 'https://ecomedia.herokuapp.com/';
    fetch(URL_MANEIRA)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  }, [

  ]);
  return (
    <TemplatePage>
      <h1>
        Cadastro da categoria
        {' '}
        {valores.nome}
      </h1>
      <form
        onSubmit={
          function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias, valores,
            ]);
            setValores(valoresInicias);
          }
        }
      >

        <FormField
          label="Nome da categoria"
          type="text"
          value={valores.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>
      <ul>
        {categorias.map((category, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${category} ${indice}`}>
            {category.nome}
          </li>
        ))}
      </ul>
    </TemplatePage>
  );
}

export default CategoryRegister;
