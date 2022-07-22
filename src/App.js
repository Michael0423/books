import './App.css';
import { Routes, Route } from 'react-router-dom';

import { RouterNav } from './components/RouterNav/RouterNav'
import { Menus } from './components/Menus/Menus'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Books } from './components/Books/Books'
import { BookInfo } from "./components/Books/BookInfo"

function App() {
  const menus = [{
    link: 'books',
    name: 'Books'
  }];
  
  return (
    <div className="App">
      <RouterNav></RouterNav>
      <div className='contents'>
        <Menus menus={menus}></Menus>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="books" element={<Books />}></Route>
            <Route path="books/:bookId" element={<BookInfo />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='login' element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
