
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar1 from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router, Route, Routes,
// } from "react-router-dom";

function App() {

  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);

  }
  return (
    <>
    {/* <Router> */}
    <Navbar1 title="Navbar through props" mode={mode}  togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    {/* <Routes> */}
      <Textarea heading="ENTER THE TEXT TO ANALYSE" showAlert={showAlert} mode={mode}/>
      {/* <Route path="/about" element={<About/> }/> */}
    {/* </Routes> */}
    </div>

    {/* </Router> */}
      
    </>
  );
}

export default App;
