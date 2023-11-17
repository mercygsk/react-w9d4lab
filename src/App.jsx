import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StarshipCard from './components/starshipcard';
import './App.css'




const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' , backgroundColor:'gray',textAlign:'center'}}><h1>Star Wars Starships</h1></div>
      {starships.map((starship, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor:'gray', float:'left' }}>
          <h3>Name:{starship.name}</h3>
          <h3>Model:{starship.model}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
