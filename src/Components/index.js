import React from "react";

import "./index.css";
import carrinho from "../Assets/carrinho.png";
import blocos from "../Assets/blocos.png";
import carro from "../Assets/carro.png";
import moto from "../Assets/moto.png";
import sofa from "../Assets/sofa.png";
function Index() {
  return (
    <div className='wrapper'>
      <div className='row'>
        <div className='col-1'>
          <img src={carrinho} alt={""} />
          <div>FACIDADE DE COMPRA</div>
        </div>

        <div className='col-1'>
          <img src={blocos} alt={""} />
          <div>QUANTIDADE NÃO LIMITADA</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-3'>
          <img src={carro} alt={""} />
          <div>FRETE GRÁTIS</div>
        </div>
        <div className='col-3'>
          <img src={moto} alt={""} />
          <div>AGILIDADE</div>
        </div>
        <div className='col-3'>
          <img src={sofa} alt={""} />
          <div>COMODIDADE</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
