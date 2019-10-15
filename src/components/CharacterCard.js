import React from "react";

export default function CharacterCard(props) {
  let character = props.character;
  return (
    <div className="Each-Character-Card">
      <img className='character-image' alt={character.name} src={character.image} />
      <div className='character-info'>
        <h1>{character.name}</h1>
        <h3>{character.status}</h3>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
      </div>
      </div>
  );
}
