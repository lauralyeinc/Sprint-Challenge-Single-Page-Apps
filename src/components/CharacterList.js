import React, { useEffect, useState } from "react";

import axios from 'axios';
import SearchForm from './SearchForm.js';
import CharacterCard from './CharacterCard.js'; 



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

    const handleChange = (event) => {
      //console.log(event); 
      event.preventDefault(); 
      let searchCharacter= event.target.value.toLowerCase();
      //console.log(searchCharacter);
      setSearchCharacter(searchCharacter);
    } 

    if(searchCharacter) {
      console.log(" I ran "); 
        let charactersFiltered = characters.filter(character => {
          if(character.name.toLowerCase().includes(searchCharacter)){
            return character;
        } 
        }) 
        console.log(charactersFiltered); 
    
        return (
          <div className='characters-page'>
            <SearchForm handleChange={handleChange} /> 
            {charactersFiltered.map(character => (
            <CharacterCard key={character.id} character={character}/>
            ))}
          </div>
        );
    }
    

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




}


