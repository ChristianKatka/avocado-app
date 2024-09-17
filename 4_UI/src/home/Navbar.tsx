import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import profileImage from "../assets/profile-image.jpg";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../auth/store/thunks/auth-tokens.thunk";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const logOut = async () => {
    setAnchorEl(null);
    try {
      await dispatch(logOutThunk()).unwrap();
      navigate("/login");
    } catch (error) {
      console.log("error", error);
    }
    dispatch(logOutThunk());
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold text-3xl">My Notes</p>
        <img
          className="w-12 h-12 object-cover mr-2 rounded-full cursor-pointer"
          src={profileImage}
          alt="profile-image"
          onClick={handleClick}
        />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={logOut}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>
    </>
  );
};
