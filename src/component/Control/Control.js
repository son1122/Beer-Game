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
    console.log(props.player1);
    console.log(props.player2);
    console.log(props.player3);
    console.log(props.player4);
    data1=props.player1
    data1 = turnData(data1,props.price[props.turn-1],props.player2[0])
    props.setPlayer1(data1);
    data2=props.player2
    data2 = turnData(data2,props.player1[4],props.player3[0])
    props.setPlayer2(data2);
    data3=props.player3
    data3 = turnData(data3,props.player2[4],props.player4[0])
    props.setPlayer3(data3);
    data4=props.player4
    data4 = turnData4(data4,props.player3[4])
    props.setPlayer4(data4);
  };
  const turnData = (dataOfPlayer,sale,stockNext,)=>{
    let stock=dataOfPlayer[0]
    let backlog=dataOfPlayer[1]
    let cost=dataOfPlayer[2]
    let order=dataOfPlayer[4]
    let getOrder = 0
    if(stockNext>order){
      getOrder = order
    }else{
      getOrder = 0
    }
    sale = parseInt(sale)
    console.log("sale "+sale+" order "+order+" get "+getOrder);
    if(parseInt(order)){
      order = parseInt(order)
    }else{
      order = 0
    }
    console.log(order);
    stock=stock+getOrder
    if(stock>backlog){
      stock=stock-backlog
      backlog=0
    }else{
      backlog= backlog-stock
      stock=0
    }
    if(stock>=sale&&stock!=0){
      stock= stock-sale
    }else{
      stock= stock-sale
      backlog = backlog
    }
    // sale=order
    cost=stock*1+backlog*3
    return ([stock,backlog,cost,sale,order,getOrder])
  }
  const turnData4 = (dataOfPlayer,sale,stockNext)=>{
    let stock=dataOfPlayer[0]
    let backlog=dataOfPlayer[1]
    let cost=dataOfPlayer[2]
    let order=dataOfPlayer[4]
    let getOrder = 0
    let manu=props.player4[7]
    stockNext = props.player4[5]
    if(stockNext>order){
      getOrder = order
    }else{
      getOrder = 0
    }
    sale = parseInt(sale)
    console.log("sale "+sale+" order "+order+" get "+getOrder);
    if(parseInt(order)){
      order = parseInt(order)
    }else{
      order = 0
    }
    console.log(order);
    // console.log(sale);
    // console.log("my order"+order)
    if(stock+getOrder>sale){
      stock= stock+getOrder-sale
      // sale = 0
    }else{
      backlog = Math.abs(stock+getOrder-sale)
      stock=0
      // sale = 0
    }
    sale = order
    stockNext=manu
    manu=order
    cost=stock*1+backlog*3
    return ([stock,backlog,cost,sale,order,getOrder,stockNext,manu])
  }
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
