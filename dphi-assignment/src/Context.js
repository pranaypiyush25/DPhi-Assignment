import React from "react";

const NotesContext = React.createContext({
  currentNote: null,
  Notes: [
    { id: 1, title: "T1", creator: "Pranay Piyush", note: "This is the Note Section" },
    { id: 2, title: "T2", creator: "Pranay Piyush", note: "This is the Note Section" },
    { id: 3, title: "T3", creator: "Pranay Piyush", note: "This is the Note Section" },
    { id: 4, title: "T4", creator: "Pranay Piyush", note: "This is the Note Section" },
  ],
});

export default NotesContext