import React from "react";
import "./home.css";

import { Link } from 'react-router-dom'

export default function Home() {
 

  return (
    <aside>
        <div className="home-box">
          <strong> Original.io </strong>
          <button> <Link to="/product"> Ir para teste </Link> </button>
        </div>
    </aside>
  );
}
