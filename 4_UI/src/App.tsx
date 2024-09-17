import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./auth/components/Login";
import { Register } from "./auth/components/Register";
import { CreateNote } from "./create-note/CreateNote";
import { Home } from "./home/Home";
import { About } from "./shared/About";
import { NotFound } from "./shared/NotFound";
import { Welcome } from "./shared/Welcome";
import { ProtectedRouteGuard } from "./guards/protectedRouteGuard";

export const App = () => {
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
              <Home />
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
