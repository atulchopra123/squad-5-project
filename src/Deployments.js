import React, { useState } from "react";

function formatDate(date, time) {
    const utcSeconds = new Date(...`${date} ${time}`.split(/[- :]/)).getTime() / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleDateString("en-US");
}

function formatTime(date, time) {
    const utcSeconds = new Date(...`${date} ${time}`.split(/[- :]/)).getTime() / 1000;
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
        e.preventDefault();
        setBooks((books) => [...books, newBook]);
        setNewBook({ date: "", time: "" });
    };

    return <div className="container pt-5">
    <h1>Deployments</h1>
    
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
  