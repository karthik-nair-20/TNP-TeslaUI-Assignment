import './App.css'
import "./server"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Landing from './components/Landing';
import ProductListing from './components/ProductListing';
import Deatils from './shared/Details';
import Notfound from './components/Notfound';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='/tesla/:id' element={<ProductListing />} />
          <Route path="tesla/:id/detail" element={<Deatils />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
