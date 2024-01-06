import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
 <>
 <Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/update/:id' element={<Update/>}/>
  </Routes>
 </Router>
 </>
  );
}

export default App;
