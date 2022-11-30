import "./Control.css";
import { redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Control = (props) => {
  const [current, setCurrent] = useState(props.player1);
  useEffect(() => {
    // console.log(current);
    switch (props.player) {
      case 1:
        props.setWhoPlay("Reatrailer");
        setCurrent(props.player1);
        break;
      case 2:
        props.setWhoPlay("Wholesale");
        setCurrent(props.player2);
        break;
      case 3:
        props.setWhoPlay("Distributor");
        setCurrent(props.player3);
        break;
      case 4:
        props.setWhoPlay("Manufactoring");
        setCurrent(props.player4);
        break;
      default:
        props.setWhoPlay("Reatrailer");
        setCurrent(props.player1);
        break;
    }
  });
  let data;
  let [data1,data2,data3,data4] =[]
  let wheOrder,whoGetSale // for change order to next player sale
  let numOrder,numGet,whoGetOrder,whoSendOrder // for check how much next player can actually get order and assign it to get order 
  const editData = (e) => {
    data = current;
    data[4] = parseInt(e);
    switch (props.player) {
      case 1:
        props.setPlayer1(data);
        break;
      case 2:
        props.setPlayer2(data);
        break;
      case 3:
        props.setPlayer3(data);
        break;
      case 4:
        props.setPlayer4(data);
        break;
      default:
        props.setWhoPlay("Reatrailer");
        setCurrent(props.player1);
        break;
    }
  };
  const endTurn = () => {
    //edit data
    data1 = turnData(props.player1,props.player2)
    props.setPlayer1(data1);
    data2 = turnData(props.player2,props.player3)
    props.setPlayer2(data2);
    data3 = turnData(props.player3,props.player4)
    props.setPlayer3(data3);
    data4 = turnData(props.player4,props.manu,props.setManu)
    props.setPlayer4(data4);
    // change order to sale of the next player
    wheOrder = props.price[props.turn-1]
    whoGetSale = props.player1
    whoGetSale[3] = wheOrder
    props.setPlayer1(whoGetSale);
    wheOrder = props.player1[4]
    whoGetSale = props.player2
    whoGetSale[3] = wheOrder
    props.setPlayer2(whoGetSale);
    wheOrder = props.player2[4]
    whoGetSale = props.player3
    whoGetSale[3] = wheOrder
    props.setPlayer3(whoGetSale);
    wheOrder = props.player3[4]
    whoGetSale = props.player4
    whoGetSale[3] = wheOrder
    props.setPlayer4(whoGetSale);

    wheOrder = props.player2[6]
    whoGetSale = props.player1
    console.log(whoGetSale);
    whoGetSale[5] = wheOrder
    console.log(whoGetSale);
    props.setPlayer1(whoGetSale);
    wheOrder = props.player3[6]
    whoGetSale = props.player2
    whoGetSale[5] = wheOrder
    props.setPlayer2(whoGetSale);
    wheOrder = props.player4[6]
    whoGetSale = props.player3
    whoGetSale[5] = wheOrder
    props.setPlayer3(whoGetSale);
    
    
    
  };
  // data = stock[0],backlog[1],cost[2],sale[3],order[4],getOrder[5],sendOrder[6]
  // stockNext,Manu
  const turnData = (dataOfPlayer,nextPlayer)=>{
    let stock = dataOfPlayer[0]
    let backlog = dataOfPlayer[1]
    let cost =  dataOfPlayer[2]
    let sale =  dataOfPlayer[3]
    let order = dataOfPlayer[4]
    let getOrder = dataOfPlayer[5]
    let sendOrder = 0
    // get Order
    //clear backlog Order
    if(backlog>0){
      console.log("test backlog");
      backlog =backlog- getOrder
      if(backlog>=0){
        sendOrder += getOrder
      }else{
        sendOrder= backlog+getOrder
        stock=Math.abs(backlog)
        backlog=0
      }
    }else{
        stock=stock+getOrder
    }

    //Clear Sale Order
    if(sale<=stock&&stock!=0){
      console.log("test stock more than sale");
      stock=stock-sale
      sendOrder += sale
    }else{
      stock=stock-sale
      sendOrder += stock
      backlog = backlog +Math.abs(stock)
      stock = 0
    }
    let result = [stock,backlog,cost,sale,order,getOrder,sendOrder]
    console.log(result);
    return (result)
  }
  // const turnData4 = (dataOfPlayer,sale)=>{
    
  //   return ([stock,backlog,cost,sale,order,getOrder,stockNext,manu])
  // }
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
        <h3>{"Sale Number : "+ current[3]}</h3>
        <div>
          <div>
            <h2>stock</h2>
            <h2>{current[0]}</h2>
          </div>
          <div>
            <h2>BackLog</h2>
            <h2>{current[1]}</h2>
          </div>
        </div>
        <h3>{"Get Order : "+current[5]}</h3>
      </div>
      <div className="submit">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.setPlayer(props.player >= 4 ? 1 : props.player + 1);
            props.setTurn(props.player == 4 ? props.turn + 1 : props.turn);
            editData(e.target[0].value);
            document.getElementById("value").value = null;
            if(props.player == 4){
              endTurn()
            }
          }}
        >
          <input type="text" id="value" name="value"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Control;
