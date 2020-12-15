import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./header.css";
import "./medias.css";

import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import bag from "../../assets/bag.png";

export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [cart, setCart] = useState(false);

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

  return (
    <header>
      {isOpen === true && (
        <div className="lightbox">
          <div className="addToCart">
            <button className="close-box" onClick={closeItem}>
              X
            </button>
            <div className="product"> </div>
            <strong> Produto adicionado com sucesso! </strong>
            <button> FINALIZAR COMPRA </button>
            <Link to="/Product" >
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
                <strong> ter Frete Gratis </strong>
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

      <div>
        <button id="header-menu" className="menu">
          <img src={menu} alt="menu" />
        </button>
      </div>

      <div id="header-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div>
        <button className="search">
          <img src={search} alt="search" />
        </button>
      </div>

      <div>
        <button className="bag" onClick={openCart}>
          <img src={bag} alt="bag" />
        </button>
      </div>
    </header>
  );
}
