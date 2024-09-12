import { Search } from "@mui/icons-material"; // Optional, for an inline SVG search icon

export const SearchInput = () => {
  return (
    <div className="flex items-center bg-white rounded-3xl p-2 shadow-sm">
      <Search className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full bg-transparent border-none outline-none placeholder-gray-500 text-gray-800"
      />
    </div>
  );
};
