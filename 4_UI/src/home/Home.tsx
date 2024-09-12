import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <p>Hello to avocado app</p>
    </div>
  );
};
