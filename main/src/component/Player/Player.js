import { useEffect, useState } from "react";
import {Route,Routes,Link,Navigate} from "react-router-dom"
import View from "../View/View"
import Control from "../Control/Control";
import "./Player.css"
const Player = (props) => {
    

    return (
      <div className="container">
        <View whoplay={props.whoPlay}/>
        <Control setWhoPlay={props.setWhoPlay} whoPlay={props.whoPlay} player={props.player} setPlayer={props.setPlayer} 
            price={props.price} turn={props.turn} setTurn={props.setTurn} player1={props.player1} setPlayer1={props.setPlayer1}
            player2={props.player1} setPlayer2={props.setPlayer1} player3={props.player1} setPlayer3={props.setPlayer1}
            player4={props.player1} setPlayer4={props.setPlayer1}/>
      </div>
    );
}

export default Player;
