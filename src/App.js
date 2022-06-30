import './App.css';
import { FiAlignJustify, FiShoppingBag, FiSearch, FiUser } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <header>
        <div className='header-nav'>
          <div className='container-menu'>
            <a href='null'> <FiAlignJustify/> </a>
          </div>

          <div className='container-logo'>
                <a href='null'> <h1>Web Comics</h1> </a>
              </div>

          <div className='container-icons'>
            <ul>
              <li><a href='null'> <FiSearch/> </a></li>
              <li><a href='null'> <FiShoppingBag/> </a></li>
              <li><a href='null'> <FiUser/> </a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
