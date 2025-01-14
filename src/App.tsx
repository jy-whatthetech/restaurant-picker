import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode }  from 'jwt-decode';
import './App.css'

const restaurants = [
  {
    id: 1,
    name: "The Rustic Kitchen",
    cuisine: "Italian",
    rating: 4.5,
    priceRange: "$$",
    description: "Authentic Italian cuisine in a cozy atmosphere",
    openStatus: true
  },
  {
    id: 2,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.8,
    priceRange: "$$$",
    description: "Premium sushi and traditional Japanese dishes",
    openStatus: true
  },
  {
    id: 3,
    name: "Taco Plaza",
    cuisine: "Mexican",
    rating: 4.2,
    priceRange: "$",
    description: "Street-style tacos and fresh Mexican favorites",
    openStatus: false
  },
  {
    id: 4,
    name: "Burger Bistro",
    cuisine: "American",
    rating: 4.3,
    priceRange: "$$",
    description: "Gourmet burgers and craft beers",
    openStatus: true
  }
];

// Get unique cuisines for filter dropdown
const cuisines = ['All', ...new Set(restaurants.map(r => r.cuisine))];

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const filteredRestaurants = selectedCuisine === 'All'
    ? restaurants
    : restaurants.filter(r => r.cuisine === selectedCuisine);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <select
        value={selectedCuisine}
        onChange={(e) => setSelectedCuisine(e.target.value)}
      >
        {cuisines.map(cuisine => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>

      <div>{filteredRestaurants.map((restaurant) => (
        <div className="card">{restaurant.name}</div>
      ))}</div>
    </>
  )
}

export default App
