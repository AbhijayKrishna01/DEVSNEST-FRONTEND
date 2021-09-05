import React,{useState} from "react";
//import ReactDOM from "react-dom";
import "./styles.css";


const App = () =>{
  const [name,setName] = useState("");
  const [name1,setName1] = useState("");
 
  const inputEvent =(event) =>{
   
    setName(event.target.value);
    
  };
  const inputEvent1 =(event) =>{
   
    setName1(event.target.value);
    
  };
 
 
  return (
  <>
     <div className="form">
    <h1>Input</h1>
    <input type = "text" placeholder="Username" onChange = {inputEvent}/><br></br>
    <input type = "text" placeholder="Email" onChange={inputEvent1}/>
    
    <p><b>username</b> {name}</p>
    <p><b>email</b> {name1}</p>
    </div>
  </>
  
  );
};
export default App;