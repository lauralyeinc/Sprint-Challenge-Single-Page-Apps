import React, { useEffect, useState } from "react";

import axios from 'axios';
import SearchForm from './SearchForm.js';
import CharacterCard from './CharacterCard.js'; 
import { Link } from 'react-router-dom';


export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchChatacter]= useState(characters);  
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          // console.log(res); 
          setCharacters = (characters.data.results); 
        })
        .catch(error => {
          console.error("Server Error", error); 
        });
    }
    getCharacters();  
    }, [characters]);

    if (!characters) {
      return <div>
        <h2>Loading characters...</h2>
        </div>; 
    }

  const handleChange = (event) => {
    event.preventDefault(); 
    let searchedCharacter= event.target.value.toLowerCase();
    setSearchedCharacter(searchedCharacter); 
  }

  if(searchedCharacter) {
    let charactersFiltered = characters.filter(character => {
      if(character.name.toLowerCase().includes(searchCharacter)){
        return character;
    }
  }
  )

    return (
      <div className='characters-page'>
        <SearchForm handleChange={handleChange} /> 
        {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
        ))}
      </div>
  );
} 

function CharacterDetails({ character }) {
  const { img, name, status, species, gender } = character; 
  return (
    <Link to={`/characters/${character.id}`} >
      <div className="character-card" >
        <h2>{name}</h2>
        <div className="status">
        Status: {status}
        </div>
        <div className="speices">
          Species: {species}
        </div>
        <div className="gender">
          Gender: {gender}
        </div>
      </div>
    </Link>
  ); 
}
}
