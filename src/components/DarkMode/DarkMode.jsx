import React from "react";
import "./DarkMode.css";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";



const DarkMode = () => {

  const toDark =()=>{
    document.querySelector("body").setAttribute('my-theme','dark')
    localStorage.setItem("selectedTheme","todark");
  }

  const toLight =()=>{
    document.querySelector("body").setAttribute('my-theme','light')
    localStorage.setItem("selectedTheme","tolight")
  }

  
  const currentTheme= localStorage.getItem("selectedTheme");

  if(currentTheme==="tolight"){
    toLight()
  }else{
    toDark()
  }



  const toogleTheme =(e)=>{
    if(e.target.checked){
      toDark()
    }else{
      toLight()
    }

  }



  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toogleTheme}
        defaultChecked={currentTheme === "tolight" ? false : true}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <img src={Sun} alt="Sun" />
        <img src={Moon} alt="Moon" />
      </label>
    </div>
  );
};

export default DarkMode;
