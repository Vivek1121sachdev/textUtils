import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
   Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode,Setmode] = useState('light')
  

  const [alert,SetAlert] = useState(null)

  const showAlert = (message,type) => {
    SetAlert({
      msg : message,
      type : type
    })
    setTimeout( () => {
      SetAlert(null)
    },1500);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light');  
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-primary');
  // }

  const ToggleMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+ cls)
    if(mode === 'light'){
      Setmode('dark');
      document.body.style.backgroundColor = '#043743';
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      },2000)
      setInterval(() => {
        document.title = 'TextUtils is best';
      },1500)
    }
    else{
      Setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

 
  return(
    <>
    <BrowserRouter>
      <Navbar title= "Textutils" mode={mode}  ToggleMode={ToggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      < Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode} />}>  
        </Route>
        <Route exact path="/about" element={<About mode={mode}/>}>  
        </Route>
      </ Routes>
      </div> 
    </BrowserRouter>
    </>
  );
}

export default App; 