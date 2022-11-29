import "./Control.css"
import { redirect} from "react-router-dom";
import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";



const Control = (props) => {
  const navigate = useNavigate();
  // useEffect(() => {


  //   return (redirect("/player/"+props.player)) 
  // }, [])
  console.log(props)
    return (
      <div className="control-container">
        <div>
        <h1>Player {props.player}</h1>
        </div>
        <div>
        <h1>Line 2</h1>
        </div>
        <div>
        <h1>line 3 </h1>
        </div>
        <div>
          <button onClick={()=>{
              console.log(props.player);
              props.setPlayer(props.player>=4?1:props.player+1);
              navigate('/game/'+props.player);
          }}>change player</button>
        </div>
        
      </div>
    );
}

export default Control;
