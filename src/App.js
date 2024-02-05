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
import Subfooter from './components/machining/Subfooter';
// import Material from './components/machining/Material';
import Quality from './components/machining/Quality';
// import Equipment from './components/machining/Equipment';
import UnderConstructionPage from './components/UnderonstructionPage';
import TitlebarImageList from './components/machining/TitlebarImageList';
function App() {
  return (

      <Router>
        <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' exact element={<Sve />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/machining' element={<Subfooter />}>
          <Route path='' exact element={<Machining />} />
          {/* <Route path='material'  element={<Material />} /> */}
          <Route path='material'  element={<TitlebarImageList />} />
          {/* <Route path='quality'  element={<UnderConstructionPage />} /> */}
          <Route path='quality'  element={<Quality />} />
          {/* <Route path='equipment'  element={<Equipment />} /> */}
          <Route path='equipment'  element={<UnderConstructionPage />} />
          <Route path="*" element={<NotFoundPage />} />
            </Route>
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
