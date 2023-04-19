import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Meats from './components/Meats/Meats';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" component={Landing} index />
          <Route path="/home" component={Home} />
          <Route exact path="/meats" component={Meats} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
