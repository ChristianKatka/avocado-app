import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { NotesState } from "../slices/notes.slice";
import { Note } from "../../../models/note.model";

const selectNotesState = (state: RootState) => state.notes;

export const selectIsNotesLoading = createSelector(
  [selectNotesState],
  (state: NotesState) => state.isLoading
);

export const selectNotes = createSelector(
  [selectNotesState],
  (state: NotesState) => {
    // Filter notes based on title and text properties
    return Object.values(state.notes).filter(
      (note) =>
        note.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        note.text.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }
);

export const selectSelectedNote = createSelector(
  [selectNotesState],
  (state: NotesState) => {
    const note: Note = state.notes[state.selectedNote];
    return note;
  }
);
