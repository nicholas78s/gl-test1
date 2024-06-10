import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import './css/common.css';
import './css/fonts.css';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="*" element={<Contacts />} />
        </Routes>
      </div>
    </Router> 
  ); 
}

export default App
