import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { AuthCredentials } from "../../models/auth-credentials.model";
import { registerThunk } from "../store/thunks/auth-tokens.thunk";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAuthLoading } from "../store/selectors/auth.selectors";
import { useAppSelector } from "../../store/hooks";
import avocado from "../../assets/avocado.svg";

export const Register = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAuthLoading = useAppSelector(selectIsAuthLoading);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleRegister = async () => {
    const credentials: AuthCredentials = { email, password };

    try {
      // Dispatch the thunk and unwrap the result to handle success or failure
      await dispatch(registerThunk(credentials)).unwrap();
      // If successful, navigate to the welcome page
      navigate("/welcome");
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-12 px-6">
      {/* Logo Placeholder */}
      <img src={avocado} alt="Avocado App Logo" className="w-24 h-24" />

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
      {!isAuthLoading ? (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
        >
          Register
        </Button>
      ) : (
        <Button variant="contained" color="primary" fullWidth disabled>
          <CircularProgress size={24} color="inherit" />
        </Button>
      )}

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
