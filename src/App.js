// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alerts from './components/Alerts';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" abouttext = "About TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alerts/>
    <div className = "container my-3">
      <TextForm heading = "Enter the text to analyze" mode = {mode}/>
    </div>
    <About/>
    </>
  );
}

export default App;
