import './RecoveryTimes.css';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function RecoveryTimes() {

  // define state for the list of recoveries
  const [recoveries, setRecoveries] = useState([]);

  // define state for the Recoveries form
  const [newRecovery, setNewRecovery] = useState({ startDate: "", startTime: "", duration: "" });

  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    setRecoveries((recoveries) => [...recoveries, newRecovery]);
    setNewRecovery({ startDate: "", startTime: "", duration: "" });
  };

  return (
    <div className="RecoveryTimes">
      <form onSubmit={onSubmit}>
        <div id="recoveryTimesTitle">
            Recovery Times
        </div>
        <div id="mttrDiv">
          <label htmlFor="mttrValue">MTTR:</label>
          <span id="mttrValue">mttr value</span>
        </div>
        <table className="table">
            <thead>
              <tr>
                <th>Start Time</th>
                <th>Duration (minutes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>

                </td>
              </tr>
            </tbody>
        </table>
        <div>
          <span id="startDateSpan">
              <label htmlFor="startDate">Start Date:</label>
              <input
                  id="startDate"
                  className="form-control"
                  type="date"
                  name="startDate"
                  value={newRecovery.startTime}
                  onChange={(e) => setNewRecovery({ ...newRecovery, startTime: e.target.value })}
                />
          </span>

          <span id="startTimeSpan">
              <label htmlFor="startTime">Start Time:</label>
                <input
                  id="startTime"
                  className="form-control"
                  type="time"
                  name="startTime"
                  value={newRecovery.startTime}
                  onChange={(e) => setNewRecovery({ ...newRecovery, startTime: e.target.value })}
                />
          </span>

          <span id="durationSpan">
              <label htmlFor="duration">Duration:</label>
              <input
                  id="duration"
                  className="form-control"
                  type="text"
                  name="duration"
                  value={newRecovery.duration}
                  onChange={(e) => setNewRecovery({ ...newRecovery, duration: e.target.value })}
                />
          </span>

        <input id="buttonAddRecovery" type="button" value="Add Recovery Time"/>
        </div>
      </form>  
    </div>  
  );
}

export default RecoveryTimes;
