import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import NotesContext from "../../Context";

function AddNote() {
  const { state, dispatch } = useContext(NotesContext);
  const [noteData, setNoteData] = useState({
    creator: "",
    title: "",
    note: "",
    date: "0000-00-00"
  });

  const classes = useStyles();

  const clear = () => {
    setNoteData({
      creator: "",
      title: "",
      note: "",
      date: ""
    });

    dispatch({ type: "RESET", payload: noteData });
  };

  useEffect(() => {
    setNoteData({
      creator: state.currentNote.creator,
      title: state.currentNote.title,
      note: state.currentNote.note,
      date: state.currentNote.date
    });
  }, [state.currentNote]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      noteData.creator.trim() === "" ||
      noteData.title.trim() === "" ||
      noteData.note.trim() === ""
    ) {
    } else {
      if (state.currentNote.id === 0) {
        dispatch({ type: "ADD_NOTE", payload: noteData });
      } else if (state.currentNote.id !== 0) {
        dispatch({ type: "UPDATE_NOTE", payload: noteData });
      }
      setNoteData({
        creator: "",
        title: "",
        note: "",
        date: ""
      });
    }
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Add Notes</Typography>

        <TextField
          name="Date"
          variant="outlined"
          fullWidth
          type="date"
          value={noteData.date}
          onChange={(e) =>
            setNoteData({ ...noteData, date: e.target.value })
          }
        />

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={noteData.creator}
          onChange={(e) =>
            setNoteData({ ...noteData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />
        <TextField
          name="note"
          variant="outlined"
          label="Add Note..."
          fullWidth
          multiline
          rows={4}
          value={noteData.note}
          onChange={(e) => setNoteData({ ...noteData, note: e.target.value })}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          startIcon={<AddIcon />}
        >
          Add Note
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          onClick={clear}
          fullWidth
          startIcon={<ClearIcon />}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default AddNote;
