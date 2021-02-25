import React, { useContext, useState } from "react";
import NotesContext from "../../Context";
import { Grid, InputAdornment, OutlinedInput } from "@material-ui/core";
import useStyles from "./styles";
import Note from "./Note/Note";
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import lodash from "lodash";

function Notes() {
  const classes = useStyles();
  const { state, dispatch } = useContext(NotesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortParam, setSortParam] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filter, setFilter] = useState(0);

  var sortedNotes

  if(state.filter_param === 0)
  sortedNotes = lodash.orderBy(state.Notes, sortParam, sortOrder)

  else if(state.filter_param === 1)
   sortedNotes = lodash.filter(state.Notes,filter_list)

   else if(state.filter_param === 2)
   sortedNotes = lodash.filter(state.Notes,filter_list_month)

   else if(state.filter_param === 3)
   sortedNotes = lodash.filter(state.Notes,filter_list_year)

  const handleParamChange = (event) => {
    setSortParam(event.target.value);
  };


  const handleOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    dispatch({ type: "UPDATE_FILTER", payload: event.target.value });

  };
  function filter_list(note) {
    var note_date = new Date(note.date);
    var limit_date = new Date();
    limit_date.setDate(limit_date.getDate() - 7);
    return note_date.getTime() >= limit_date.getTime();
  }

  function filter_list_month(note) {
    var note_date = new Date(note.date);
    var limit_date = new Date();
    limit_date.setDate(limit_date.getDate() - 30);
    return note_date.getTime() >= limit_date.getTime();
  }

  function filter_list_year(note) {
    var note_date = new Date(note.date);
    var limit_date = new Date();
    limit_date.setDate(limit_date.getDate() - 365);
    return note_date.getTime() >= limit_date.getTime();
  }


  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <Grid item xs={6}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Sort By
                  </InputLabel>
                  <Select value={sortParam} onChange={handleParamChange}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="title">Title</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                    <MenuItem value="creator">Creator</MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Sort Order
                  </InputLabel>
                  <Select value={sortOrder} onChange={handleOrderChange}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="asc">Asc</MenuItem>
                    <MenuItem value="desc">Des</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Filter
                  </InputLabel>
                  <Select onChange={handleFilterChange}
                  value={filter}>
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Last Week</MenuItem>
                    <MenuItem value={2}>Last Month</MenuItem>
                    <MenuItem value={3}>Last Year</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
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
                  <SearchIcon />
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
      {sortedNotes
        .filter((note) => {
          if (searchTerm === "") {
            return note;
          } else if (
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.note.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.creator.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return note;
          }
        })
        .map((note, index) => {
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
