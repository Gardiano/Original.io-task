import React from "react";
import "./product.css";
import "./medias.css";

import LogoFooter from "../footer/footer";

import videoMobile from "../../assets/videoMobile.png";
import bag from "../../assets/bag.png";
import search from "../../assets/search.png";
import faceBook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import vtex from "../../assets/seloVtex.png";
import ebit from "../../assets/seloebit.png";
// import arrowdown from "../../assets/arrow-down.png";
// import arrowup from "../../assets/arrow-up.png";
import pic from "../../assets/svg.svg";

export default function Product() {
  return (
    <>
      <main>
        <div className="menu">
          <div className="menu-box">
            <div className="login">
              <a href="https"> Entrar </a> | <a href="https"> Cadastre-se </a>
            </div>

            <div className="sessoes">
              <a href="https"> SAPATOS </a>
              <a href="https"> BOLSAS </a>
              <a href="https"> ACESSÓRIOS </a>
              <a href="https"> OFF </a>
            </div>

            <div className="options">
              <button>
                <img src={search} alt="procurar" />
              </button>
              <input type="text" placeholder="Buscar" />
              <button>
                <img src={bag} alt="carrinho" />
              </button>
            </div>
          </div>
        </div>

        <div className="back-buttons">
          <a href="https"> Home </a> |<a href="https"> Sapatos </a>
        </div>

        {/* web */}
        <div className="pictures">
          <div className="thumbs">
            <p> Video </p>
            <div className="thumb-video">
              <img src={videoMobile} alt="video" />
            </div>

            <div className="pic-product">
              <a href="https">
                <img src={pic} alt="" />
              </a>
            </div>

            <div className="pic-product">
              <a href="https">
                <img src={pic} alt="" />
              </a>
            </div>

            <div className="pic-product">
              <a href="https">
                <img src={pic} alt="" />
              </a>
            </div>

            <div className="pic-product">
              <a href="https">
                <img src={pic} alt="" />
              </a>
            </div>

            <div className="pic-product">
              <a href="https">
                <img src={pic} alt="" />
              </a>
            </div>

            <div className="pic-product">
              <a href="https">
                <img src={pic} alt="" />
              </a>
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

            <button className="info-price-button"> ADICIONAR À SACOLA </button>

            <div className="info-description-product">
              <label>
                Rasteira em atanado soft com tira no dedo e fechamento de fivela.
                Possui sola sempre na cor do cabedal.
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

       <div className="footer-contents">

       <div className="medias">
            <a href="https://facebook.com/">
              {" "}
              <img src={faceBook} alt="facebook" />{" "}
            </a>
            <a href="https://instagram.com">
              {" "}
              <img src={instagram} alt="instagram" />{" "}
            </a>
            <a href="https://pinterest.com">
              {" "}
              <img src={pinterest} alt="pinterest" />{" "}
            </a>

            <div className="selos">
            <a href="https://facebook.com/">
              {" "}
              <img src={vtex} alt="vTex" />{" "}
            </a>
            <a href="https://instagram.com">
              {" "}
              <img src={ebit} alt="eBit" />{" "}
            </a>
          </div>
          </div>

          <div className="infos">
            <div className="institucional">
              <p> INSTITUCIONAL </p>
              <a href="https://facebook.com" alt="a" > A Marca </a>
              <a href="https://facebook.com" alt="a" > Lojas </a>
              <a href="https://facebook.com" alt="a" > Contato </a>
            </div>

            <div className="institucional">
              <p> INFORMAÇÕES </p>
              <a href="https://facebook.com" alt="a" >Formas de Pagamento </a>
              <a href="https://facebook.com" alt="a" > Trocas e devoluções </a>
              <a href="https://facebook.com" alt="a" > Cuidados Com o Produto </a>
            </div>

            <div className="institucional">
              <p> CONHEÇA </p>
              <a href="https://facebook.com" alt="a" > Franquias e Multimarcas </a>
              <a href="https://facebook.com" alt="a" > Trabalhe com a Gente </a>
              <a href="https://facebook.com" alt="a" > Procon-RJ </a>
            </div>


          </div>
          
          <div className="newsletter">
            <form>
            <strong> ASSINE NOSSA NEWS </strong>
              <label> Nome </label> <br />
              <input type="text" placeholder="  Nome" /> <br /> <br />
            
              <input type="text" placeholder="  Email" />
              <button> ENVIAR </button>
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
            <a href="https://facebook.com/">
              {" "}
              <img src={faceBook} alt="facebook" />{" "}
            </a>
            <a href="https://instagram.com">
              {" "}
              <img src={instagram} alt="instagram" />{" "}
            </a>
            <a href="https://pinterest.com">
              {" "}
              <img src={pinterest} alt="pinterest" />{" "}
            </a>
          </div>

          <div className="selos">
            <a href="https://facebook.com/">
              {" "}
              <img src={vtex} alt="vTex" />{" "}
            </a>
            <a href="https://instagram.com">
              {" "}
              <img src={ebit} alt="eBit" />{" "}
            </a>
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
