import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CreateNoteNavbar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-between items-center pb-10 px-2">
        <IconButton onClick={goBack}>
          <ArrowBackIosIcon />
        </IconButton>
        <a style={{ color: "#007AFF" }}>Save</a>
      </div>
    </>
  );
};
