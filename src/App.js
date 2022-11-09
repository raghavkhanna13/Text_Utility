import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  const toggleMode = (e) => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode is Enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>

          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter Text To Perform Different Actions" mode={mode} showAlert={showAlert} />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
