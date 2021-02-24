import React, { useContext, useState } from "react";
import NotesContext from "../../Context";
import {
  Grid,
  InputAdornment,
  OutlinedInput
} from "@material-ui/core";
import useStyles from "./styles";
import Note from "./Note/Note";
import SearchIcon from "@material-ui/icons/Search";

function Notes() {
  const classes = useStyles();
  const { state } = useContext(NotesContext);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <OutlinedInput
              name="creator"
              variant="outlined"
              size="small"
              fullWidth
              value={searchTerm}
              className={classes.SearchField}
              placeholder="Search"
              endAdornment={
              <InputAdornment position="end">
                <SearchIcon/>
              </InputAdornment>
            }
              autoComplete="off"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      {state.Notes.filter((note) => {
        if (searchTerm === "") {
          return note;
        } else if (
          note.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return note;
        }
      }).map((note, index) => {
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
