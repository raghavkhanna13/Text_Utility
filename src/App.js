import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TextUtils"/>

      <div className='container my-3'>
        <TextForm heading = "Enter Text To Perform Different Actions"/>
        {/* <About /> */}
      </div>
      
    </>
  );
}

export default App;
