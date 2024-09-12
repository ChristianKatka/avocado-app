import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Register } from "./auth/components/Register";
import { Home } from "./home/Home";
import { About } from "./shared/About";
import { NotFound } from "./shared/NotFound";
import { CreateNote } from "./create-note/CreateNote";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-note" element={<CreateNote />} />

        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
