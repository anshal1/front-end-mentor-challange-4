import './App.css';
import Navbar from './pages/Navbar/Navbar';
import State from "./context/State.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import DetailsPage from './pages/Details/DetailsPage';
function App() {
  return (
    <>
      <State>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/details/:name' element={<DetailsPage />} />
            </Routes>
          </Router>
        </div>

      </State>
    </>
  );
}

export default App;
