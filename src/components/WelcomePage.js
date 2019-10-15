import React from "react";
import { Link } from 'react-router-dom'; 
import styled from "styled-components"; 

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred; 
`; 


const Button = styled.button`
  font-size: 1rem;
  color: palevioletred; 
  border-color: palevioletred
  backgroud-color: white;
`;



export default function WelcomePage() {
  return (
    <div>
        <Title>Welcome to the ultimate fan site!</Title>
        <img className="main-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick"/>
        <div>
          <Link to='/characters'><Button> Check out the full list of Characters! 
          </Button> 
          </Link> 
        </div>
      </div> 
  ); 
}
