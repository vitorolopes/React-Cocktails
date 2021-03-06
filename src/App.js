import React, { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import CocktailDetails from './pages/CocktailDetails'
import Error from './pages/Error'

function App() {
  return (
    <Router>

       <Navbar/>

       <Routes>

          <Route exact path="/" element={ <Home/> } />

          <Route path="/about" element= { <About/> } />
             
          <Route path="/cocktail/:id" element={ <CocktailDetails/> } />

          <Route path="*" element={ <Error /> } />

       </Routes>

    </Router>   
  );
}

export default App;

