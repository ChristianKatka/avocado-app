import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { NotesState } from "../slices/notes.slice";

const selectNotesState = (state: RootState) => state.notes;

export const selectIsNotesLoading = createSelector(
  [selectNotesState],
  (state: NotesState) => state.isLoading
);
