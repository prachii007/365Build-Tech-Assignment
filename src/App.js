import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blogs from './pages/blogs';
import Users from './pages/users';
import './App.css';
import Navbar from './pages/components/navbar';
import IndividualUser from './pages/individualUser';
import IndividualPost from './pages/individualPost';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/individualuser/:id' element={<IndividualUser />} />
        <Route exact path='/individualpost/:user/:posts' element={<IndividualPost />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
