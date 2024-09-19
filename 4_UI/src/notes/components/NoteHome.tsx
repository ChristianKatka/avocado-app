import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { getNotesThunk } from "../store/thunks/notes.thunk";
import { AddNoteButton } from "./add-note-button/AddNoteButton";
import { Navbar } from "./navbar/Navbar";
import { Notes } from "./notes/Notes";
import { SearchNotes } from "./search-notes/SearchNotes";

export const NoteHome = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotesThunk());
  }, [dispatch]);

  return (
    <>
      <AddNoteButton></AddNoteButton>

      <div className="flex flex-col gap-4 px-2 py-3">
        <Navbar></Navbar>
        <SearchNotes></SearchNotes>
        <Notes></Notes>
      </div>
    </>
  );
};
