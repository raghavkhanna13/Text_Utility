import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  const toggleMode = (e) =>{
    // if(mode === "light"){
    //   setMode("dark");
    //   document.body.style.backgroundColor = "black";
    //   showAlert("Dark Mode is Enabled", "success");
    // }
    // else{
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("Light Mode is Enabled", "success");
    // }

    if(e.target.id === "blue"){
      setMode("dark");
      document.body.style.backgroundColor = "#0202a9f5";
      showAlert("Dark Mode is Enabled", "success");
    }
    else if(e.target.id === "green"){
      setMode("dark");
      document.body.style.backgroundColor = "#026502";
      showAlert("Dark Mode is Enabled", "success");
    }
    else if(e.target.id === "black"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode is Enabled", "success");
    }
    else if(e.target.id === "violet"){
      setMode("dark");
      document.body.style.backgroundColor = "#7e007e";
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
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading = "Enter Text To Perform Different Actions" mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
      
    </>
  );
}

export default App;
