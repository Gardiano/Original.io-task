import React from "react";
import "./error.css";

import { Link } from 'react-router-dom'

export default function Erro() {
  return (
    <aside>
       <div className="error-box">
          <strong>  Ops... Pagina Não Encontrada :( </strong> <br /> <br />
          <p> Você quis dizer... </p> <br />
          <Link to="/"> Original.io </Link>
       </div>
    </aside>
  );
}
