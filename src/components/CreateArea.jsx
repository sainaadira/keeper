import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  // function with name and value constants to catch whatever is being typed in the input
  function handleChange(e) {
    const { name, value } = e.target;

    setNote(previousNote => {
      return {
        ...previousNote,
        [name]: value
      };
    });
  }

  // function that handles the button and submits the note
  function submitNote(e) {
    // sending over the onAdd property and passing in the currently added note
    props.onAdd(note);

    // clearing the textarea once the note has been submitted
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  }


  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
