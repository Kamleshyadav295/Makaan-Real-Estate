
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './component/About';
import { Header } from './component/Header';
import { Footer } from './component/Footer';

function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
