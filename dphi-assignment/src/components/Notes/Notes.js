import React, { useContext } from "react";
import NotesContext from "../../Context";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import Note from "./Note/Note";

function Notes() {
  const classes = useStyles();
  const { state } = useContext(NotesContext);
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {state.Notes.map((note, index) => {
        return (
          <Grid item xs={12} sm={6} md={6}>
            <Note note={note} key={index} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Notes;
