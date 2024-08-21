
import './App.css'
import CvPage from './CvPage/CvPage'
import Header from './CvPage/Header'
import Home from './Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/page" element={<CvPage />} />
      <Route path="/header" element={<Header />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
