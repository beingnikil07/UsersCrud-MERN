import './App.css';
import AddUser from './Components/Users/AddUser';
import Navbar from './Components/layout/Navbar';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import AboutMe from './Components/Pages/AboutMe';
import NotFound from './Components/Pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/about' element={<AboutMe />}></Route>
          <Route exact path='/add' element={<AddUser />}></Route>
          <Route exact path='/*' element={<NotFound />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
