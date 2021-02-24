import React, {useContext} from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import note_bg from "../../../note_bg.jpg";
import NotesContext from '../../../Context'

function Note({ note }) {
  const classes = useStyles();
  const {dispatch} = useContext(NotesContext)

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={note_bg}
        title={note.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{note.creator}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <br/>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {note.title}
      </Typography>
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {note.note}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=> dispatch({type: 'SET_CURRENT_NOTE', payload: note})}>
          <EditIcon fontSize="small" /> Edit
        </Button>

        <Button size="small" color="primary" onClick={()=> dispatch({type: 'DELETE_NOTE', payload: note.id})}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Note;
