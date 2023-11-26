import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Sve from './components/Sve';
import About from './components/About';
import Machining from './components/Machining';
import Ourteam from './components/Ourteam';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';
function App() {
  return (

      <Router>
        <Routes>
        <Route path='/'  element={<Home />}>
          <Route path='/' exact element={<Sve />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/machining' element={<Machining />}/>
          <Route path='/our-team' element={<Ourteam />}/>
          <Route path='/contact-us' element={<Contact />}/>
          <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>

  );
}

export default App;
