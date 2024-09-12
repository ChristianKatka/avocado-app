import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const AddNoteButton = () => {
  const navigate = useNavigate();

  const addNoteButton = () => {
    console.log("yes");
    navigate("/create-note");
  };
  return (
    <IconButton
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 5,
        backgroundColor: "white",
        transform: "scale(1.2)",
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2)",
      }}
      onClick={addNoteButton}
    >
      <AddIcon />
    </IconButton>
  );
};
