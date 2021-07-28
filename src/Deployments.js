import React, { useEffect, useState } from "react";
import {differenceInCalendarWeeks} from 'date-fns'
let depNum = 1;
let timeSpan = 0;
//let tempDate1 = 0;
//var currentWeekNumber = require('current-week-number');
var startWeek = require('current-week-number');
var lastWeek = require('current-week-number');

function jsDate(date, time) {
    var dt = new Date(...`${date} ${time}`.split(/[- :]/));
    // BUG?? - Month seems to be off by 1...
    dt.setMonth(dt.getMonth() - 1);
    return dt;
  }
  function formatDate(date, time) {
    const utcSeconds = jsDate(date, time).getTime() / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleDateString("en-US");
  }
  function formatTime(date, time) {
    const utcSeconds = jsDate(date, time).getTime() / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleTimeString("en-US");
  }
  
  
export default function Deployments() {
    
  // define state for the list of deployments <td>{format(new Date(deployment.date), "'Today is a' eeee")}</td>
  const [deployments, setDeployments] = useState([]);
  // define state for the deployment form
  const [newDeployments, setNewDeployments] = useState({ date: "", time: "" });
  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
      e.preventDefault();
      setDeployments((deployments) => [...deployments, newDeployments]);
      setNewDeployments({ date: "", time: "" });
  };

  function sortDeployments() {
    //Performs the sorting operation for table display (Oldest < Newest)
    deployments.sort((a,b) => (a.date > b.date) || ((a.date === b.date) && (a.time > b.time)) ? 1 :  (b.date > a.date) || ((b.date === a.date) && (b.time > a.time)) ? -1 : 0);
  }
  
  function updateFrequency() {
    depNum = deployments.length;
   
    if (depNum == 0) { 
        freq = "0";
    } else if (depNum == 1) { 
      freq = "1";
    } else {
    sortDeployments()

    let startDate = new Date(deployments[depNum - 1].date);
    let endDate = new Date(deployments[0].date);
    let timeDif = differenceInCalendarWeeks(startDate, endDate) + 1;
    freq = (depNum/timeDif).toFixed(1);
    
    }
  }

  useEffect(() => {
    // This is be executed when `deployments` state changes as useState() is async
    updateFrequency()
  }, [deployments])

  var freq = 0
  updateFrequency();

return <div className="container pt-5">
    <h1>Deployments</h1>
    
    <div><b> Frequency: {freq}/week </b> </div>

    <table className="table table-striped mt-5">
      <tbody>
        {deployments.map((deployment, i) => (
          <tr key={i}>
            <td>{i+1}</td>  
            <td>{formatDate(deployment.date, deployment.time)}</td>
            <td>{formatTime(deployment.date, deployment.time)}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <form onSubmit={onSubmit}>
      <p>
        <label htmlFor="date">Deployment Date</label>
        <input
          id="date"
          className="form-control"
          type="date"
          name="date"
          value={newDeployments.date}
          required
          onChange={(e) => setNewDeployments({ ...newDeployments, date: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="time">Deployment Time</label>
        <input
          id="time"
          className="form-control"
          type="time"
          name="time"
          value={newDeployments.time}
          required
          onChange={(e) => setNewDeployments({ ...newDeployments, time: e.target.value })}
        />
      </p>
      <button className="btn btn-primary">Add Deployment</button>
    </form>
  </div>
  
};
  