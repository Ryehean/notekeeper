import React, { useState } from "react";
// import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
// import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}><AddCircleIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
