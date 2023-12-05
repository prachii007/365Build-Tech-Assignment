import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home';
import Blog from '../src/pages/blog';
import Users from '../src/pages/users';
import './App.css';
import Navbar from './pages/components/navbar';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/users' element={<Users />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
