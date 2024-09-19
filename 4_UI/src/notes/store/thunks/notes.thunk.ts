import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../../shared/handle-error";
import {
  createNoteService,
  deleteNoteService,
  getNotesService,
} from "../services/notes.service";
import { NoteDraft } from "../../../models/note-draft.model";
import { Note } from "../../../models/note.model";

// TYPE PROPS::
// 1. Return type
// 2. props
// 3. when using selector inside thunk. { state: RootState }

export const getNotesThunk = createAsyncThunk<Note[], void>(
  "notes/get",
  async (_, { rejectWithValue }) => {
    try {
      const notes = await getNotesService();
      console.log("HERES NOTES:::");
      console.log(notes);

      return notes;
    } catch (err) {
      return handleError("error: notes/get", err, rejectWithValue);
    }
  }
);

export const createNoteThunk = createAsyncThunk<Note, NoteDraft>(
  "notes/create",
  async (noteDraft, { rejectWithValue }) => {
    try {
      const note: Note = await createNoteService(noteDraft);
      console.log("api res note:");
      console.log(note);

      return note;
    } catch (err) {
      return handleError("error: notes/create", err, rejectWithValue);
    }
  }
);

export const deleteNoteThunk = createAsyncThunk<any, any>(
  "notes/delete",
  async (noteId, { rejectWithValue }) => {
    try {
      const res = await deleteNoteService(noteId);
      console.log("api res:");
      console.log(res);

      return res;
    } catch (err) {
      return handleError("error: notes/delete", err, rejectWithValue);
    }
  }
);
