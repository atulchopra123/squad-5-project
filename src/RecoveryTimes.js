import './RecoveryTimes.css';
//import React, { useState } from "react";

function RecoveryTimes() {

  // define state for the list of recovery times
  //const [recoveryTimes, setRecoveryTimes] = useState([]);

  // define state for the book form
  //const [newRecoveryTime, setNewRecoveryTime] = useState({ startDate: "", startTime: "", duration: "" });

  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    //setBooks((books) => [...books, newBook]);
    //setNewBook({ title: "", author: "" });
  };

  return (
    <div className="RecoveryTimes">
      <form onSubmit={onSubmit}>
        <div>
            Recovery Times
          </div>
        <div>
          <label htmlFor="mttlValue">MTTR:</label>
          <span id="mttrValue">mttr value</span>
          
        </div>
        <table class="table">
            <tr>
              <th>Start Time</th>
              <th>Duration (minutes)</th>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
        </table>
        
        <span id="startDateSpan">
          <div>
            <label htmlFor="startDate">Start Date:</label>
          </div>  
          <div>
            <input id="startDate" type="date"></input>
          </div>
        </span>

        <span id="startTimeSpan">
          <div>
            <label htmlFor="startTime">Start Time:</label>
          </div>
          <div>
            <input id="startTime"  type="time"></input>
          </div>
        </span>

        <span id="durationSpan">
          <div>
            <label htmlFor="duration">Duration:</label>
          </div>
          <div>
            <input id="duration"  type="text"></input>
          </div>
        </span>

        <input id="buttonAddRecoveryTime" type="button" value="Add Recovery Time"/>
      </form>  
    </div>  
  );
}

export default RecoveryTimes;
