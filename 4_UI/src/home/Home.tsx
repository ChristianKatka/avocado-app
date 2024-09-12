import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { NotesMasonry } from "./NotesMasonry";
import { SearchInput } from "./SearchInput";
import { AddNoteButton } from "./AddNoteButton";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <AddNoteButton></AddNoteButton>

      <div className="flex flex-col gap-4 px-2 py-3">
        <Navbar></Navbar>
        <SearchInput></SearchInput>
        <NotesMasonry></NotesMasonry>
      </div>
    </>
  );
};
