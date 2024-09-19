import { Search } from "@mui/icons-material"; // Optional, for an inline SVG search icon
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { searchFromNotes } from "../../store/slices/notes.slice";

export const SearchNotes = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(searchFromNotes(searchTerm));
  }, [searchTerm, dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="flex items-center bg-white rounded-3xl p-2 shadow-sm">
      <Search className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full bg-transparent border-none outline-none placeholder-gray-500 text-gray-800"
      />
    </div>
  );
};
