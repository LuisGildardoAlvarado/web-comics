import './App.css';
import { FiSearch, FiUser } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <header>
        <div className='header-nav'>
          <div className='container-logo'>
            <a href='null'> <h1>Web Comics</h1> </a>
          </div>

          <div className='container-search'>
            <input type="text" className='search-input' placeholder='Search...' />
            <button className='search-button'>
              <a href='null'> <FiSearch/> </a>
            </button>
            
          </div>

          <div className='container-icons'>
            <ul>
              <li><a href='null'> <FiUser/> </a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
