import React, { useEffect, useState } from "react";

import axios from 'axios';
import SearchForm from './SearchForm.js';
import CharacterCard from './CharacterCard.js'; 
import { Link } from 'react-router-dom';


export default function CharacterList(props) {
  const [characters, setCharacters] = useState(null);
  const [searchCharacter, setSearchCharacter]= useState(characters);  
  useEffect(() => {
    
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results); 
        })
        .catch(error => {
          console.error("Server Error ", error); 
        });
      
    }, []);
    

    if (!characters) {
      return <div>
        <h2>Loading characters...</h2>
        </div>; 
    } else {
    return (
      <div className='characters-page'>
        <SearchForm handleChange={handleChange} /> 
        {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
        ))}
      </div>
    );
    }


if(searchCharacter) {
    let charactersFiltered = characters.filter(character => {
      if(character.name.toLowerCase().includes(searchCharacter)){
        return character;
    }
    })
}


  const handleChange = (event) => {
    event.preventDefault(); 
    let searchCharacter= event.target.value.toLowerCase();
    setSearchCharacter(searchCharacter);
    
    return (
      <div className='characters-page'>
        <SearchForm handleChange={handleChange} /> 
        {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
        
        ))}
      </div>
    );
  } 
}


