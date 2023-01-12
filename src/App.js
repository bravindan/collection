
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import Home from './components/Home.js';
import Movies from './components/Movies.jsx';
import Navbar from './components/Navbar.jsx';
import News from './components/News.js';
import Weather from './components/Weather.js';


function App() {
  // const navPath=useLocation()
  return (
   <div className=' w-full bg-cover bg-no-repeat bg-center '>
     
    <BrowserRouter>
    <Navbar />
    {/* {navPath.pathname} */}
      <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route path='/news' element={<News/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
