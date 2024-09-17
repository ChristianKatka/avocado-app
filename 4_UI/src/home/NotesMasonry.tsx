import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";

const notes = [
  {
    id: "1",
    title: "Note 1",
    text: "This is the first note.This is the first note.This is the first note.",
  },
  { id: "2", title: "Note 2", text: "This is the second note." },
  { id: "3", title: "Note 3", text: "This is the third note." },
  {
    id: "4",
    title: "Note 3",
    text: "This is the third note.This is the third note.This is the third note.",
  },
  { id: "5", title: "Note 3", text: "This is the third note." },
  {
    id: "6",
    title: "Note 1",
    text: "This is the first note.This is the first note.This is the first note.",
  },
  { id: "7", title: "Note 2", text: "This is the second note." },
  { id: "8", title: "Note 3", text: "This is the third note." },
  {
    id: "9",
    title: "Note 3",
    text: "This is the third note.This is the third note.This is the third note.",
  },
  { id: "10", title: "Note 3", text: "This is the third note." },
  { id: "11", title: "Note 3", text: "This is the third note." },
];

const breakpointColumnsObj = {
  default: 2, // Two columns for default (larger screens)
  1100: 2, // Two columns for screens 1100px and wider
  700: 2, // Two columns for screens 700px and wider
  500: 2, // Two columns for screens 500px and wider
};

export const NotesMasonry = () => {
  const navigate = useNavigate();

  const selectNote = (noteId: string) => {
    console.log("selected note:", noteId);
    navigate(`/note/${noteId}`);
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col mb-4 cursor-pointer"
          onClick={() => selectNote(note.id)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{note.title}</h3>
            <span className="text-gray-500 cursor-pointer">•••</span>
          </div>
          <p className="text-gray-600 mt-2">{note.text}</p>
        </div>
      ))}
    </Masonry>
  );
};
