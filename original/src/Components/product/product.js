
import React from "react";
import "./product.css";

import LogoFooter from '../footer/footer'

import videoMobile from "../../assets/videoMobile.png";
import faceBook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import pinterest from '../../assets/pinterest.png';
import vtex from '../../assets/seloVtex.png';
import ebit from '../../assets/seloebit.png';

export default function Product() {
  return (
    <>
    <main>
      <strong> RASTEIRA TIRA DEDO </strong>
      <label> RT 0568 | 03.07.0653 </label>
      <div className="card-product">
        <div className="img-dots">
          <button className="videoMobile">
            <img src={videoMobile} alt="video" />
          </button>
          <button className="dots"></button>
          <button className="dots"></button>
          <button className="dots"></button>
          <button className="dots"></button>
        </div>
      </div>

      <strong className="color-tag"> Cor </strong>
      <div className="color-product">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>

      {/* melhorar modelagem da div */}
      <strong className="size-tag">
        Tamanho
        <strong className="sizeGuide-tag"> Guia De Tamanho </strong>
      </strong>

      <div className="size-product">
        <button>33</button>
        <button>34</button>
        <button>35</button>
        <button>36</button>
        <button>37</button>
        <button>38</button>
        <button>39</button>
        <button>40</button>
      </div>

      <div className="price-product">
        <p> R$ 100,00 </p>
        <h5> R$ 55,20 </h5>
        <h6> Ou 6x de R$ 10,00 </h6>
        <button> ADICIONAR À SACOLA </button>
      </div>

      <strong className="description-tag"> Descrição </strong>
      <div className="description-product">
        <label>
          Rasteira em atanado soft com tira no dedo e fechamento de fivela.
          Possui sola sempre na cor do cabedal.
        </label>
      </div>

      <strong className="whoSee"> QUEM VIU, VIU TAMBÉM </strong>

      <div className="carousel-products">
        <div className="carousel-itens">
          <div className="carousel-price">
            <strong> R$ 204,90 </strong>
            <p> Ou 6x de R$ 34,15 </p>
          </div>
        </div>

        <div className="carousel-itens">
          <div className="carousel-price">
            <strong> R$ 204,90 </strong>
            <p> Ou 6x de R$ 34,15 </p>
          </div>
        </div>
      </div>

      <div className="pagination-buttons">
        <button> </button>
        <p> 1 de 10 </p>
        <button> </button>
      </div>

      <section>
        <button>
          INSTITUCIONAL <p> + </p>
        </button>
        <button>
          INFORMAÇÕES <p> + </p>
        </button>
        <button>
          CONHEÇA <p> + </p>
        </button>

        <div className="medias">
          <a href="https://facebook.com/"> <img src={faceBook} alt="facebook" /> </a>
          <a href="https://instagram.com"> <img src={instagram} alt="instagram" /> </a>
          <a href="https://pinterest.com"> <img src={pinterest} alt="pinterest" /> </a>
        </div>

        <div className="selos">
          <a href="https://facebook.com/"> <img src={vtex} alt="vTex" /> </a>
          <a href="https://instagram.com"> <img src={ebit} alt="eBit" /> </a>
        </div>

        <strong> ASSINE NOSSA NEWS </strong>
        <form>
          <label> Nome </label> <br />
          <input type="text" /> <br /> <br />
          <label> Email </label> <br />
          <input type="text" /> 
          <button> Enviar </button>
        </form>

        <div className="endereco">
        Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.
        Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100
        CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
        </div>
      </section>  
      <LogoFooter />    
    </main>
   
    </>
  );
}
