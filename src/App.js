import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import WrappedNormalLoginForm from './components/Login.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={WrappedNormalLoginForm} />
        <Route exact path="/Home" component={Home} />
     </Router>
    
    </div>
  );
}

export default App;
