import React, { useState, useEffect } from 'react';
import RestaurantCard from './components/RestaurantCard'

export const Context = React.createContext()

function App() {

  const [restaurants, setRestaurants] = useState(null)


  useEffect(() => {
    fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=280&entity_type=city`, {
      method: 'GET',
      headers: {
        'user-key': '6d95408afb716e6f265b20f1ac020339',
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(resp => {
      setRestaurants(resp.best_rated_restaurant)
    })
  }, [])

  return (
    <div className="App">
      <h1
        style={{
          textAlign: 'center',
          margin: '15px 5px',
          padding: '10px',
          border: 'orange 5px solid',
          borderRadius: '10px'
        }}
      >Ruckus restaurant</h1>

      <Context.Provider value={restaurants}>
        <RestaurantCard />
      </Context.Provider>
    </div>
  );
}

export default App;
