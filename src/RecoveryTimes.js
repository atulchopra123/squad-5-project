import './RecoveryTimes.css';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RecoveryTimes() {

  // retrieve an array of objects from localStorage
  const recoveries_stored = JSON.parse(localStorage.getItem("recoveries_json"));

  // define state for the list of recoveries
  const [recoveries, setRecoveries] = useState(recoveries_stored ? recoveries_stored : []);

  // define state for the Recoveries form
  const [newRecovery, setNewRecovery] = useState({ startDate: "", startTime: "", duration: "" });

  
  //Performs the sorting operation for table display (Oldest < Newest)
  recoveries.sort((a,b) => (a.startDate > b.startDate) || ((a.startDate === b.startDate) && (a.startTime > b.startTime)) ? 1 :  (b.startDate > a.startDate) || ((b.startDate === a.startDate) && (b.startTime > a.startTime)) ? -1 : 0);


  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    setRecoveries((recoveries) => [...recoveries, newRecovery]);
    setNewRecovery({ startDate: "", startTime: "", duration: "" });
  };

  useEffect(() => {
    // This is be executed when `recoveries` state changes
    // store an array of objects in localStorage
    localStorage.setItem("recoveries_json", JSON.stringify(recoveries));
  }, [recoveries])

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

  return (
    <div className="container pt-5">
      <form onSubmit={onSubmit}>
        <h1 id="recoveryTimesTitle">Recovery Times</h1>
        <div id="mttrDiv">
          <label htmlFor="mttrValue" style={{paddingRight:'5px'}}>MTTR:</label>
          <span id="mttrValue">
            { (recoveries.reduce((total, recovery) =>  (total + parseInt(recovery.duration)),0) / recoveries.length).toFixed(2) } minutes
          </span>
        </div>
        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Start Time</th>
                <th>Duration (minutes)</th>
              </tr>
            </thead>
            <tbody>
              {recoveries.map((recovery, i) => (
                <tr key={i}>
                  <td>{formatDate(recovery.startDate, recovery.startTime)} {formatTime(recovery.startDate, recovery.startTime)}</td>
                  <td>{recovery.duration}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <span id="startDateSpan" style={{width:'50%',float:'left', paddingRight:'10px'}}>
              <label htmlFor="startDate">Start Date:</label>
              <input
                  id="startDate"
                  className="form-control"
                  type="date"
                  name="startDate"
                  required
                  value={newRecovery.startDate}
                  onChange={(e) => setNewRecovery({ ...newRecovery, startDate: e.target.value })}
                />
          </span>

          <span id="startTimeSpan" style={{width:'50%', float:'right'}}>
              <label htmlFor="startTime">Start Time:</label>
                <input
                  id="startTime"
                  className="form-control"
                  type="time"
                  name="startTime"
                  required
                  value={newRecovery.startTime}
                  onChange={(e) => setNewRecovery({ ...newRecovery, startTime: e.target.value })}
                />
          </span>

          <span id="durationSpan" style={{width:'100%', float:'right', paddingTop:'10px', paddingBottom:'10px'}}>
              <label htmlFor="duration">Duration (minutes):</label>
              <input
                  id="duration"
                  className="form-control"
                  type="number"
                  required min="1" max="1440"
                  name="duration"
                  value={newRecovery.duration}
                  onChange={(e) => setNewRecovery({ ...newRecovery, duration: e.target.value })}
                />
          </span>
          <br/>
          <button id="buttonAddRecovery" className="btn btn-primary">Add Recovery Time</button>
        </div>
      </form>  
    </div>  
  );
}

export default RecoveryTimes;
