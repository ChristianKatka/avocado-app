import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const AddNoteButton = () => {
  return (
    <IconButton
      className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition-colors"
      style={{ zIndex: 1000 }}
      onClick={() => {
        // Handle button click, e.g., open a modal or navigate to a form
        console.log("Add note button clicked");
      }}
    >
      <AddIcon />
    </IconButton>
  );
};

export default AddNoteButton;
