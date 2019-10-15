import React from "react";
import { Link } from 'react-router-dom'; 
import style from "styled-components"; 





export default function WelcomePage() {
  return (
    <div>
        <h1>Welcome to the ultimate fan site!</h1>
        <img className="main-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick"/>
        <div>
          <Link to='/characters'><button> Check out the full list of Characters! 
          </button> 
          </Link> 
        </div>
      </div> 
  ); 
}
