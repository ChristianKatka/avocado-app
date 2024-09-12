import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./auth/components/Login";
import { About } from "./shared/About";
import { NotFound } from "./shared/NotFound";
import { Register } from "./auth/components/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
