import React, { useState } from "react";
//let depNum = 0;
//let timeSpan = 0;
//let tempDate1 = 0;
//var currentWeekNumber = require('current-week-number');
//var startWeek = require('current-week-number');
//var lastWeek = require('current-week-number');
let freq = 0;

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
    
    // define state for the list of books <td>{format(new Date(book.date), "'Today is a' eeee")}</td>
    const [books, setBooks] = useState([]);
    // define state for the book form
    const [newBook, setNewBook] = useState({ date: "", time: "" });
    // define the function that runs when the form is submitted
    const onSubmit = (e) => {
        /*depNum = depNum + 1;
        
        if (depNum === 1) { 
            timeSpan = 1; //(lastWeek(new Date(books.date)) - startWeek(new Date(books.date)));

        }
        else {
            timeSpan = (lastWeek(new Date(books.date[depNum])) - startWeek(new Date(books.date[1])));
        }
        
        freq = depNum/timeSpan;*/

        e.preventDefault();
        setBooks((books) => [...books, newBook]);
        setNewBook({ date: "", time: "" });
        
    };
    //Performs the sorting operation for table display (Oldest < Newest)
    books.sort((a,b) => (a.date > b.date) || ((a.date === b.date) && (a.time > b.time)) ? 1 :  (b.date > a.date) || ((b.date === a.date) && (b.time > a.time)) ? -1 : 0);

    return <div className="container pt-5">
    <h1>Deployments</h1>
    
    <div><b> Frequency: {freq}/week </b> </div>

    <table className="table table-striped mt-5">
      <tbody>
        {books.map((book, i) => (
          <tr key={i}>
            <td>{i+1}</td>  
            <td>{formatDate(book.date, book.time)}</td>
            <td>{formatTime(book.date, book.time)}</td>
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
          value={newBook.date}
          onChange={(e) => setNewBook({ ...newBook, date: e.target.value })}
        />
      </p>
      <p>
        <label htmlFor="time">Deployment Time</label>
        <input
          id="time"
          className="form-control"
          type="time"
          name="time"
          value={newBook.time}
          onChange={(e) => setNewBook({ ...newBook, time: e.target.value })}
        />
      </p>
      <button className="btn btn-primary">Add Deployment</button>
    </form>
  </div>
    
  };
  