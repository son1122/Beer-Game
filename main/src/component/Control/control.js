import "./Control.css"
import { redirect} from "react-router-dom";
import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";



const Control = (props) => {
  const navigate = useNavigate();
  // useEffect(() => {


  //   return (redirect("/player/"+props.player)) 
  // }, [])
  useEffect(()=>{
    // let num = '/game/'+props.player
    // navigate(num);
    console.log(props.player);
    switch(props.player){
      case 1 :
        props.setWhoPlay("Reatrailer")
        break;
      case 2 :
        props.setWhoPlay("Wholesale")
        break;
      case 3 :
        props.setWhoPlay("Distributor")
        break;
      case 4 :
        props.setWhoPlay("Manufactoring")
        break;
        default :
        props.setWhoPlay("Reatrailer")
        break;
    }
  })
    return (
      <div className="control-container">
        <div>
        <h1>Player {props.player} :  {props.whoPlay}</h1>
        </div>
        <div className="turn-container">
          <h1>Turn : {props.turn}</h1>
          <h1>Week : {props.turn}</h1>
          <h1>Month : {props.turn}</h1>
        </div>
        <div>
        <h1>line 3 </h1>
        </div>
        <div>
          <button onClick={()=>{
              console.log(props.player);
              props.setPlayer(props.player>=4?1:props.player+1);
              props.setTurn(props.turn+1)
              console.log(props.player);
          }}>change player</button>
        </div>
        
      </div>
    );
}

export default Control;
