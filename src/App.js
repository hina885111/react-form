import React from "react";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import './styles.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";




export default function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/profile"element={<Profile />}/>
    </Routes>
    </Router>
  )
}
