import React  from "react";
import './App.css';


import InputField from "./components/Input/Input";

function App() {

  

  return (
    <div className="app">
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42UwTxrUtXgJ5kC2IhLsrAqMXzwr1ldGrsA&usqp=CAU" 
      alt="chat logo"
      />
      <h2>Chat Room</h2>
      <InputField />
    </div>
  );
}

export default App;
