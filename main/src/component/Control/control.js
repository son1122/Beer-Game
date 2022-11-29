import "./Control.css";
import { redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Control = (props) => {
  const navigate = useNavigate();
  // useEffect(() => {

  //   return (redirect("/player/"+props.player))
  // }, [])
  useEffect(() => {
    // let num = '/game/'+props.player
    // navigate(num);
    console.log(props.player);
    switch (props.player) {
      case 1:
        props.setWhoPlay("Reatrailer");
        break;
      case 2:
        props.setWhoPlay("Wholesale");
        break;
      case 3:
        props.setWhoPlay("Distributor");
        break;
      case 4:
        props.setWhoPlay("Manufactoring");
        break;
      default:
        props.setWhoPlay("Reatrailer");
        break;
    }
  });
  return (
    <div className="control-container">
      <div>
        <h1>
          Player {props.player} : {props.whoPlay}
        </h1>
      </div>
      <div className="turn-container">
        <h1>Turn : {props.turn}</h1>
        <h1>Week : {((props.turn - 1) % 4) + 1}</h1>
        <h1>Month : {Math.floor((props.turn - 1) / 4)}</h1>
      </div>
      <div className="input-value">
        <h1>1</h1>
        <div>
          <div>
            <h2>stock</h2>
            <h2>0</h2>
          </div>
          <div>
            <h2>BackLog</h2>
            <h2>0</h2>
          </div>
        </div>
        <h1>3</h1>
      </div>
      <div className="submit">
        <form onSubmit={(e)=>{
          e.preventDefault()
          console.log(props.player);
          props.setPlayer(props.player >= 4 ? 1 : props.player + 1);
          props.setTurn(props.player == 4 ? props.turn + 1 : props.turn);
          console.log(props.player);
        }}>
        <input type="text" id="lname" name="lname"></input>
        <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Control;
