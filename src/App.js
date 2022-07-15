import './App.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react'
import ComicsGrid from './components/ComicsGrid/ComicsGrid';


function App() {

  const[characters, setCharacters] = useState([]);

  const initialUrl = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=7e001fdd1ecb39e3ebf36a919eddf5dc`

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.data.results, data.data.results.thumbnail ))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  })
  

  return (
    <div className="App">
      <Header brand="Comic Web"/>
      <ComicsGrid characters = {characters}/>
    </div>
  );
}

export default App;
