import React, { useEffect, useState } from "react";

import axios from 'axios';
import SearchForm from './SearchForm.js';
import CharacterCard from './CharacterCard.js'; 


export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]); 
  const [characterSearch, setCharacterSearch] = useState(characters);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res); 
          setCharacters = (characters.data.results); 
        })
        .catch(error => {
          console.error("Server Error", error); 
        });
    }
    getCharacters();  
    }, []);

  const handleChange = (event) => {
    event.preventDefault();
    let characterSearch = event.target.value; 
    setCharacterSearch(characterSearch); 
  }
  return (
    <div className='characters-page'>
      <SearchForm handleChange={handleChange} /> 
      {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
      ))}
      
      </div>
  );
} 
