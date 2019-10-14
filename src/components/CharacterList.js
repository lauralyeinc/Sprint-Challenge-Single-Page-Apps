import React, { useEffect, useState } from "react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState(null); 

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    async function getCharacterList() {
      const characters = await Axios.get('https://rickandmortyapi.com/api/character/');
      console.log(characters); 
      setCharacters = (characters.data.results); 
    }
  }, []);

  return (
    <div className="list-page">
      <SearchForm = {handleChange} /> 
      <div className="characterslist-area">
        {
          characters.map(character => (
        <CharacterCard key={character.id} character={character} />
          ))
        }
      </div> 
    </div>
  );
}
