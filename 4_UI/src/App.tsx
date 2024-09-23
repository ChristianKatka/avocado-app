import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./auth/components/Login";
import { Register } from "./auth/components/Register";
import {
  selectDecodedAccessToken,
  selectIsAuthenticated,
} from "./auth/store/selectors/auth.selectors";
import {
  logOutThunk,
  refreshTokensThunk,
} from "./auth/store/thunks/auth-tokens.thunk";
import { CreateNote } from "./create-note/CreateNote";
import { ProtectedRouteGuard } from "./guards/protectedRouteGuard";
import { NoteHome } from "./notes/components/NoteHome";
import { About } from "./shared/About";
import { NotFound } from "./shared/NotFound";
import { Welcome } from "./shared/Welcome";
import { useAppSelector } from "./store/hooks";
import { AppDispatch } from "./store/store";
import { ReadAndUpdateNote } from "./create-note/ReadAndUpdateNote";

export const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const decodedAccessToken = useAppSelector(selectDecodedAccessToken);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated || !decodedAccessToken) return;

    const refreshTokenIfNeeded = async () => {
      try {
        const epochDateTimeNowInSeconds = Math.floor(Date.now() / 1000);
        const jwtExpirationTime = decodedAccessToken.exp;
        const tenMinutesInSeconds = 10 * 60;
        const jwtExpirationMinusTenMinutes =
          jwtExpirationTime - tenMinutesInSeconds;

        // Check if current time is within the 10-minute window before token expiration
        if (jwtExpirationMinusTenMinutes <= epochDateTimeNowInSeconds) {
          await dispatch(refreshTokensThunk()).unwrap();
        }
      } catch (error) {
        console.error("Error refreshing token:", error);
        dispatch(logOutThunk());
      }
    };
    refreshTokenIfNeeded();
  }, [isAuthenticated, decodedAccessToken, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRouteGuard>
              <NoteHome />
            </ProtectedRouteGuard>
          }
        />

        <Route
          path="/register"
          element={
            <ProtectedRouteGuard>
              <Register />
            </ProtectedRouteGuard>
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedRouteGuard>
              <Login />
            </ProtectedRouteGuard>
          }
        />

        <Route
          path="/welcome"
          element={
            <ProtectedRouteGuard>
              <Welcome />
            </ProtectedRouteGuard>
          }
        />

        <Route
          path="/note/:noteId"
          element={
            <ProtectedRouteGuard>
              <ReadAndUpdateNote />
            </ProtectedRouteGuard>
          }
        />

        <Route
          path="/create-note"
          element={
            <ProtectedRouteGuard>
              <CreateNote />
            </ProtectedRouteGuard>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRouteGuard>
              <About />
            </ProtectedRouteGuard>
          }
        />

        {/* Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
