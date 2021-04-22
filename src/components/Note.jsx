import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';



function Note(props) {

  // this function triggers the onDelete property function

  function deleteButton() {
    // passing the id to the note componenent so that it is identified for deletion
    props.onDelete(props.id)

  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteButton}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
