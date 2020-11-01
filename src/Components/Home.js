import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import logo from "../Assets/logo.jpg";

import "./Home.css";

function Home() {
  async function onSubmit() {
    window.location.href = "https://huia.com.br/";
  }

  const schema = Yup.object().shape({
    nome_produto: Yup.string().required("CRM OBRIGATÓRIO"),
    uf: Yup.string().required("UF OBRIGATÓRIO"),
  });

  return (
    <div>
      <img src={logo} alt='' />
      <h3>A PLATAFORMA DE COMPRA DIRETA DO SEU ANESTÉSICO TÓPICO</h3>

      <Form schema={schema} onSubmit={onSubmit}>
        <div className='input-text'>
          CRM:
          <Input id='nome_produto' name='nome_produto' type='text' />
        </div>

        <div className='input-text'>
          UF:
          <Input id='uf' name='uf' type='text' />
        </div>

        <button type='submit'>CONTINUAR</button>
      </Form>
      <h3>CANAL DE COMPRA EXCLUSIVO PARA CLASSE MÉDICA</h3>
    </div>
  );
}

export default Home;
