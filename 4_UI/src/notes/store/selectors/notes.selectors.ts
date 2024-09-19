import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { NotesState } from "../slices/notes.slice";

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
