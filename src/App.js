import React from "react";
import Header from "./components/Header.js";

import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js'; 
import { Route } from 'react-router-dom'; 

function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} /> 
    </main>
  );
}

export default App; 
