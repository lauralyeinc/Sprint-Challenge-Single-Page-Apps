import React, { Component } from "react";

import styled from 'styled-components';

const StyledDiv = styled.div`
  color: black; 

  &:hover {
    color: palevioletred; 
  }
`

export default function CharacterCard(props) {
  let character = props.character;
  return (
    <StyledDiv className="Each-Character-Card">
      <img className='character-image' alt={character.name} src={character.image} />
      <div className='character-info'>
        <h1>{character.name}</h1>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
      </div>
      </StyledDiv>
  );
}
