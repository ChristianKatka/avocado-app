import { createSlice } from "@reduxjs/toolkit";
import { logOutThunk } from "../../../auth/store/thunks/auth-tokens.thunk";
import { Note } from "../../../models/note.model";
import { arrayToDictionary } from "../../../shared/helpers/array-to-dictionary";
import { deleteItemByKeyFromGivenDictionary } from "../../../shared/helpers/delete-item-by-key-from-given-dictionary";
import {
  createNoteThunk,
  deleteNoteThunk,
  getNotesThunk,
} from "../thunks/notes.thunk";

export interface NotesState {
  notes: { [id: string]: Note };
  isLoading: boolean;
}

const initialState: NotesState = {
  notes: {},
  isLoading: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET NOTES
      .addCase(getNotesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes = arrayToDictionary(action.payload);
      })
      .addCase(getNotesThunk.rejected, (state) => {
        state.isLoading = false;
      })

      // CREATE NOTE
      .addCase(createNoteThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNoteThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes = { ...state.notes, [action.payload.id]: action.payload };
      })
      .addCase(createNoteThunk.rejected, (state) => {
        state.isLoading = false;
      })

      // DELETE NOTE
      .addCase(deleteNoteThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNoteThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes = deleteItemByKeyFromGivenDictionary(
          action.payload,
          state.notes
        );
      })
      .addCase(deleteNoteThunk.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(logOutThunk.fulfilled, () => initialState);
  },
});

export const notesReducer = notesSlice.reducer;
