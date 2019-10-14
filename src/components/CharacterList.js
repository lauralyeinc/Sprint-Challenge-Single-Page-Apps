import React, { useEffect, useState } from "react";

import axios from 'axios';
import SearchForm from './SearchForm.js';
import CharacterCard from './CharacterCard.js'; 


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({}); 
  const [characterSearch, setCharacterSearch] = useState(characters);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res); 
      setCharacters = (characters.data.results); 
    })
    .catch(err => 
      console.log(err)); 
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    let characterSearch = event.target.value; 
    setCharacterSearch(characterSearch); 
  }


  return (
    <div className='characters-page'>
      <SearchForm handleChange={handleChange} />
      <div className="characters-list">
        {
          characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        }
        </div> 
      </div>
  );
}; 
