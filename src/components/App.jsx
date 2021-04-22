import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // creating state for the notes array since there will be changes
  const [notes, setNotes] = useState([]);

  //passing in the currently created note to app.jsx
  function addNote(newNote) {
    setNotes(previousNotes => {
      //using the spread operator to grab hold of all of the previous notes and then add the new note at the end
      return [...previousNotes, newNote];
    });
  }
  //creating a function to delete the notes and passing in the id
  // id will help filter through array
  function deleteNote(id) {
    setNotes(previousNotes => {
      //getting hold of the previousNotes array and filtering through to delete by id
      return previousNotes.filter((noteItem, index) => {
        // returning the notes where the index does not equal the id
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* creating a property to pass the addNote function */}
      <CreateArea onAdd={addNote} />
      {/* mapping through the notes array and for each noteItem you return a new note componenet with the title and content properties*/}
      {notes.map((noteItem, index) => {
        return (
          <Note
            // using the index as a unique key and id
            id={index}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            // calling the property onDelete and passing it the deleteNote function
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
