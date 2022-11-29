import { useState } from "react";
import "./View.css"

const Player = () => {
    const [viewChange,setViewChange] = useState(1)
    return (
      <div className="view-container">
        <div className="view-button">
            <button onClick={()=>setViewChange(1)}>View 1</button>
            <button onClick={()=>setViewChange(2)}>View 2</button>
            <button onClick={()=>setViewChange(3)}>View 3</button>
        </div>
        {viewChange==1&&<h1>This is View port 1</h1>}
        {viewChange==2&&<h1>This is View port 2</h1>}
        {viewChange==3&&<h1>This is View port 3</h1>}
      </div>
    );
}

export default Player;
