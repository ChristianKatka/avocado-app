import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-50 to-gray-100 ">
      <div
        className={`transition-transform duration-1000 ease-in-out ${
          animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce text-center">
          Welcome to Avocado App
        </h1>
      </div>

      <p className="text-lg md:text-xl text-center max-w-lg px-4 mb-8">
        Have fun using this awesome notes-taking app where you can create,
        organize, and manage your notes with ease.
      </p>

      <IconButton onClick={goBack} className="shadow-lg">
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};
