import React, { useState } from "react";
import './App.css';
import RecoveryTimes from "./RecoveryTimes";
import Deployment from "./Deployments";

function App() {

  const [freq, setFreq] = useState(123);

  return (
    <div className="row">
      <div className="col">
        <Deployment freq={freq} setFreq={setFreq}/>
      </div>
      <div className="col">
        <RecoveryTimes  freq={freq} setFreq={setFreq}/>
      </div>
    </div>
  );
}

export default App;
