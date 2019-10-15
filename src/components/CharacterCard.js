import React, { Component } from "react";

import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 0 auto;
  display: flexbox;
  justify-content: center; 
  align-content: center;
  padding: 2rem;
  color: black; 

  &:hover {
    color: palevioletred; 
    border: 1px black solid; 
  }
`
const StyledInfo = styled.div`
 padding: .5rem; 
`
export default function CharacterCard(props) {
  let character = props.character;
  return (
    <StyledDiv className="Each-Character-Card">
      
      <img className='character-image' alt={character.name} src={character.image} />
      <StyledInfo className='character-info'>
        <h1>{character.name}</h1>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
      </StyledInfo>
      
      </StyledDiv>
  );
}
