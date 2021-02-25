import React from "react";

const NotesContext = React.createContext({
  currentNote: { id: 0, title: "", creator: "", note: "", date: "" },
  Notes: [
    { id: 1, title: "T1", creator: "Sarah", note: "This is the Note Section 1", date: '2021-01-25' },
    { id: 2, title: "T2", creator: "David", note: "This is the Note Section 2", date: '2021-02-23' },
    { id: 3, title: "T3", creator: "Micheal", note: "This is the Note Section 3", date: '2020-01-07' },
    { id: 4, title: "T4", creator: "Nicholas", note: "This is the Note Section 4", date: '2020-09-26' },
    { id: 5, title: "T5", creator: "Harry", note: "This is the Note Section 5", date: '2021-02-22' },
  ],
  filter_param: 0
});

export default NotesContext