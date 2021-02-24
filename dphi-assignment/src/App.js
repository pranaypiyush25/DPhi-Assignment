import React, { useContext, useReducer } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import NotesContext from "./Context";
import notesReducer from "./reducer";
import AddNote from "./components/AddNote/AddNote";
import Notes from "./components/Notes/Notes";
import useStyles from "./styles";
import logo from "./logo.png"
function App() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const classes = useStyles();
  
  console.log(state)
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <img src = {logo} className={classes.logo} />
        <Typography className={classes.heading} variant="h3">
          Notes
        </Typography>
      </AppBar>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Notes />
              </Grid>
              <Grid item xs={12} sm={4}>
                <AddNote />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </NotesContext.Provider>
  );
}

export default App;
