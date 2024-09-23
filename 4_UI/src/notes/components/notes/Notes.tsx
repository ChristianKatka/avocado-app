import DeleteIcon from "@mui/icons-material/delete";
import { IconButton } from "@mui/material";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectNotes } from "../../store/selectors/notes.selectors";
import { deleteNoteThunk } from "../../store/thunks/notes.thunk";
import { selectNoteAction } from "../../store/slices/notes.slice";

const breakpointColumnsObj = {
  default: 2, // Two columns for default (larger screens)
  1100: 2, // Two columns for screens 1100px and wider
  700: 2, // Two columns for screens 700px and wider
  500: 2, // Two columns for screens 500px and wider
};

export const Notes = () => {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectNote = (noteId: string) => {
    console.log("selected note:", noteId);
    navigate(`/note/${noteId}`);
    dispatch(selectNoteAction(noteId));
  };

  const deleteNote = (event: React.MouseEvent<HTMLElement>, noteId: string) => {
    event.stopPropagation(); // Prevent the parent div's onClick
    dispatch(deleteNoteThunk(noteId));
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
            <IconButton onClick={(event) => deleteNote(event, note.id)}>
              <DeleteIcon />
            </IconButton>
          </div>
          <p className="text-gray-600 mt-2">{note.text}</p>
        </div>
      ))}
    </Masonry>
  );
};
