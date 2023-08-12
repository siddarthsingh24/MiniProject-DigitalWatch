
import React, {useState} from "react";
const App=()=> {
  let time= new Date().toLocaleTimeString();
  const [ctime,setCtime]=useState(time);
  const UpdateTime =()=>{
    time= new Date().toLocaleTimeString();
    setCtime(time);

  };

  setInterval(UpdateTime,1000);
  return(
    <>
     <div style={{ backgroundColor: "blue", margin: "0 auto", height: "150px", width: "250px" }}>
     <h1>Digital Clock</h1>
      <h1 style={{ color: "white" }}>{ctime}</h1>
      
    </div>
     
</>
  );
};
export default App;
