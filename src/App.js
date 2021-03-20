import { AiFillAccountBook } from 'react-icons/ai';
import './App.css';
import Form from './components/Form';
import * as A from 'react-icons/ai';
import { useState } from 'react';
function App() {

  const [show, setShow] = useState(false);

  const handlePopup = () => {
    setShow(!show);
    console.log(show);
  }
  return (
    <div className="app">
           {/* <Form /> */}
           <button onClick={() => handlePopup()} >Show</button>
           <div className={`popup-wrapper ${show ? "active" : "disabled"}`}>
               <div className="popup">
                   <div className="popup-content">
                       <div className="title">
                         Search
                       </div>
                       <div className="content">
                         {/* The href attribute requires a valid value to be accessible. provide a valid, navigable address as the href value. */}
                        <input type="text" placeholder="Search"></input>
                        <button className="input__search">Search</button>
                       </div>
                       <button onClick={() => handlePopup()} className="btn">  Close </button>
                   </div>
               </div>
           </div>
    </div>
  );
}

export default App;
