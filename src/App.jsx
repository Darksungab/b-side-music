import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Contato from './pages/Contact.jsx'


function App(){
  return(
    <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/produtos" element={<Products />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>  
)
}
export default App
