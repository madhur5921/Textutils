import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react'


function App() {

  const [mode, setMode] = useState('light');

  const dark_light_mode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
<Navbar title = "Textutilis" About = "About Textutilis" mode = {mode} switch_mode = {dark_light_mode}/>
<div className = "container my-3">
<Textform/>
</div>

    </>
  );
}

export default App;
