import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./product.css";
import "./medias.css";

import Header from '../header/header';
import LogoFooter from "../footer/footer";

import videoMobile from "../../assets/videoMobile.png";
import bag from "../../assets/bag.png";
import search from "../../assets/search.png";
import faceBook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import vtex from "../../assets/seloVtex.png";
import ebit from "../../assets/seloebit.png";
import pic from "../../assets/svg.svg";

export default function Product() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [cart, setCart] = useState(false);
  const[filter, setFilter] = useState('');

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  function handleNome(e) {
    setNome(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function addToCart() {
    setisOpen(true);
  }

  function closeItem() {
    setisOpen(false);
  }

  function openCart() {
    setCart(true);
  }

  function closeCart() {
    setCart(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if( nome.length <= 3 && email.length <= 3 ) {
      alert('Informe seus dados corretamente');
      setNome('');
      setEmail('');
    } else {
      alert('Bem-vindo a nossa news!!');
      setNome('');
      setEmail('');
    }
  }

  return (
    <>
      <main>
      <Header />
        {isOpen === true && (
          <div className="lightbox">
            <div className="addToCart">
              <button className="close-box" onClick={closeItem}>
                X
              </button>
              <div className="product"> </div>
              <strong> Produto adicionado com sucesso! </strong>
              <button> FINALIZAR COMPRA </button>
              <Link to="/">
                <h5> Continuar Comprando </h5>
              </Link>
            </div>
          </div>
        )}

        {cart === true && (
          <div className="lightbox-cart">
            <div className="cart">
              <button className="close-cart-button" onClick={closeCart}>
                X
              </button>
              <strong> SACOLA </strong>
              <p> 3 itens </p>
              <div className="cart-box">
                <div className="cart-itens">
                  <div className="cart-img"> </div>
                  <p> Rasteira Tira Dedo </p>
                  <h5> R$ 49,90 </h5>
                  <button> </button>
                  <input type="text" />
                  <button> </button>
                  <button> </button>
                </div>

                <div className="cart-itens">
                  <div className="cart-img"> </div>
                  <p> Rasteira Tira Dedo </p>
                  <h5> R$ 49,90 </h5>
                  <button> </button>
                  <input type="text" />
                  <button> </button>
                  <button> </button>
                </div>

                <div className="cart-itens">
                  <div className="cart-img"> </div>
                  <p> Rasteira Tira Dedo </p>
                  <h5> R$ 49,90 </h5>
                  <button> </button>
                  <input type="text" />
                  <button> </button>
                  <button> </button>
                </div>

                <div className="cart-itens">
                  <div className="cart-img"> </div>
                  <p> Rasteira Tira Dedo </p>
                  <h5> R$ 49,90 </h5>
                  <button> </button>
                  <input type="text" />
                  <button> </button>
                  <button> </button>
                </div>

                <div className="cart-itens">
                  <div className="cart-img"> </div>
                  <p> Rasteira Tira Dedo </p>
                  <h5> R$ 49,90 </h5>
                  <button> </button>
                  <input type="text" />
                  <button> </button>
                  <button> </button>
                </div>
              </div>

              <div className="frete-gratis">
              <div>
                  <p> Faltam R$ xx,xx para você </p>
                </div>
                <div>
                  <strong> Ganhar frete gratis </strong>
                </div>
              </div>

              <div className="cart-price">
                <div className="cart-price-value">
                  <p> Total: R$ 149,00 </p>
                  <h5> até 3x de R$ 49,90 sem juros </h5>
                </div>
                <button> FINALIZAR COMPRA </button>
              </div>
            </div>
          </div>
        )}

       
        <div className="menu">
          <div className="menu-box">
            <div className="login">
              <Link to="/Product"> Entrar </Link> | <Link to="/Product"> Cadastre-se </Link>
            </div>

            <div className="sessoes">
              <Link to="/Product"> SAPATOS </Link>
              <Link to="/Product"> BOLSAS </Link>
              <Link to="/Product"> ACESSÓRIOS </Link>
              <Link to="/Product"> OFF </Link>
            </div>

            <div className="options">
              <button>
                <img src={search} alt="procurar" />
              </button>
              <input type="text" placeholder="Buscar" value={filter} onChange={handleFilter} />
              <button onClick={openCart}>
                <img src={bag} alt="carrinho" />
              </button>
            </div>
          </div>
        </div>

        <div className="back-buttons">
          <Link to="/"> Home </Link> | <Link to="/Product"> Sapatos </Link>
        </div>

        {/* web */}
        <div className="pictures">
          <div className="thumbs">
            <p> Video </p>
            <div className="thumb-video">
             <button>  <img src={videoMobile} alt="video" /> </button>
            </div>

            <div className="pic-product">
              <Link to="/Product">
                <img src={pic} alt="" />
              </Link>
            </div>

            <div className="pic-product">
              <Link to="/Product">
                <img src={pic} alt="" />
              </Link>
            </div>

            <div className="pic-product">
              <Link to="/Product">
                <img src={pic} alt="" />
              </Link>
            </div>

            <div className="pic-product">
              <Link to="/Product">
                <img src={pic} alt="" />
              </Link>
            </div>

            <div className="pic-product">
              <Link to="/Product">
                <img src={pic} alt="" />
              </Link>
            </div>

            <div className="pic-product">
              <Link to="/Product">
                <img src={pic} alt="" />
              </Link>
            </div>
          </div>

          <div className="img-product"> </div>

          <div className="spec-product">
            <strong> Rasteira Tira Dedo </strong> <br />
            <p className="id-product"> RT 0568 | 03.07.0653 </p>
            <div className="info-product">
              <p> R$ 100,00</p>
              <h5> R$ 55,20 </h5>
              <h6> Ou 6x de R$ 10,00 </h6>
            </div>
            <strong className="color-product-tag"> Cor (Fuctsia) </strong>
            <div className="info-color-product">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <strong className="info-size-tag"> Tamanho: (37) </strong>
            <strong className="info-sizeGuide-tag"> Guia De Tamanho </strong>
            <div className="info-size-product">
              <button>33</button>
              <button>34</button>
              <button>35</button>
              <button>36</button>
              <button>37</button>
              <button>38</button>
              <button>39</button>
              <button>40</button>
              <button>41</button>
              <button>42</button>
            </div>
            <button className="info-price-button" onClick={addToCart}>
              {" "}
              ADICIONAR À SACOLA{" "}
            </button>
            <div className="info-description-product">
              <label>
                Rasteira em atanado soft com tira no dedo e fechamento de
                fivela. Possui sola sempre na cor do cabedal.
              </label>
            </div>
          </div>
        </div>

        {/* mobile */}
        <strong id="product-tag"> RASTEIRA TIRA DEDO </strong>
        <label id="id-product"> RT 0568 | 03.07.0653 </label>
        <div className="card-product">
          <div className="img-dots">
            <button className="videoMobile">
              <img src={videoMobile} alt="video" />
            </button>
            <button className="dots"> </button>
            <button className="dots"> </button>
            <button className="dots"> </button>
            <button className="dots"> </button>
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
          <button onClick={addToCart}> ADICIONAR À SACOLA </button>
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

        <div className="footer-contents">
          <div className="medias">
            <a href="https://facebook.com/" rel="noreferrer" target="_blank">
              {" "}
              <img src={faceBook} alt="facebook" />{" "}
            </a>
            <a href="https://instagram.com" rel="noreferrer" target="_blank">
              {" "}
              <img src={instagram} alt="instagram" />{" "}
            </a>
            <a href="https://pinterest.com" rel="noreferrer" target="_blank">
              {" "}
              <img src={pinterest} alt="pinterest" />{" "}
            </a>

            <div className="selos">
              <a href="https://vtex.com/br-pt/" rel="noreferrer" target="_blank">
                {" "}
                <img src={vtex} alt="vTex" />{" "}
              </a>
              <a href="https://www.ebit.com.br/" rel="noreferrer" target="_blank">
                {" "}
                <img src={ebit} alt="eBit" />{" "}
              </a>
            </div>
          </div>

          <div className="infos">
            <div className="institucional">
              <p> INSTITUCIONAL </p>
              <a href="/" rel="noreferrer" target="_blank">
                {" "}
                A Marca{" "}
              </a>
              <a href="/" rel="noreferrer" target="_blank" >
                {" "}
                Lojas{" "}
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                {" "}
                Contato{" "}
              </a>
            </div>

            <div className="institucional">
              <p> INFORMAÇÕES </p>
              <a href="/" rel="noreferrer" target="_blank">
                Formas de Pagamento{" "}
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                {" "}
                Trocas e devoluções{" "}
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                {" "}
                Cuidados Com o Produto{" "}
              </a>
            </div>

            <div className="institucional">
              <p> CONHEÇA </p>
              <a href="/" rel="noreferrer" target="_blank">
                {" "}
                Franquias e Multimarcas{" "}
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                {" "}
                Trabalhe com a Gente{" "}
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                {" "}
                Procon-RJ{" "}
              </a>
            </div>
          </div>

          <div className="newsletter">
            <form onSubmit={handleSubmit}>
              <strong> ASSINE NOSSA NEWS </strong>
              <label> Nome </label> <br />
              <input
                type="text"
                placeholder="  Nome"
                value={nome}
                onChange={handleNome}
              />{" "}
              <br /> <br />
              <input
                type="email"
                placeholder="  Email"
                value={email}
                required
                onChange={handleEmail}
              />
              <button type="submit"> ENVIAR </button>
            </form>
          </div>
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
            <a href="https://facebook.com/" rel="noreferrer" target="_blank">
              {" "}
              <img src={faceBook} alt="facebook" />{" "}
            </a>
            <a href="https://instagram.com" rel="noreferrer" target="_blank">
              {" "}
              <img src={instagram} alt="instagram" />{" "}
            </a>
            <a href="https://pinterest.com/" rel="noreferrer" target="_blank">
              {" "}
              <img src={pinterest} alt="pinterest" />{" "}
            </a>
          </div>

          <div className="selos">
            <a href="https://vtex.com/br-pt/" rel="noreferrer" target="_blank">
              {" "}
              <img src={vtex} alt="vTex" />{" "}
            </a>
            <a href="https://www.ebit.com.br/" rel="noreferrer" target="_blank">
              {" "}
              <img src={ebit} alt="eBit"  />{" "}
            </a>
          </div>

          <strong> ASSINE NOSSA NEWS </strong>
          <form onSubmit={handleSubmit}>
            <label> Nome </label> <br />
            <input
              type="text"
              placeholder=" Nome"
              value={nome}
              onChange={handleNome}
            />{" "}
            <br /> <br />
            <label> Email </label> <br />
            <input
              type="email"
              placeholder=" Email"
              value={email}
              required
              onChange={handleEmail}
            />
            <button type="submit"> Enviar </button>
          </form>

          <div className="endereco">
            Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. Av.das
            Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de
            Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E:
            86.732.548 - E-mail: ecommerce@viamia.com.br
          </div>
        </section>
        <LogoFooter />
      </main>
    </>
  );
}
