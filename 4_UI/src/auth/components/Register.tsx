import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { AuthCredentials } from "../../models/auth-credentials.model";
import { registerThunk } from "../store/thunks/auth-tokens.thunk";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

export const Register = () => {
  const dispatch: AppDispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleRegister = () => {
    console.log("REGISTER");
    const credentials: AuthCredentials = { email, password };
    dispatch(registerThunk(credentials));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-12 px-6">
      {/* Logo Placeholder */}
      <img
        src="https://picsum.photos/300/300"
        alt="Avocado App Logo"
        className="w-20 h-20"
      />

      <h1 className="text-3xl font-bold mb-6">REGISTER</h1>

      {/* Email Input */}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        className="mb-4"
      />

      {/* Password Input with Eye Icon */}
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Register Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleRegister}
      >
        Register
      </Button>

      {/* Login Link */}
      <p className="text-sm text-gray-600">
        Already registered?{" "}
        <a href="/" className="text-blue-500">
          Login
        </a>
      </p>
    </div>
  );
};
