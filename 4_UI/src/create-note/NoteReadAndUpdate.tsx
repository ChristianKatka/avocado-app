// import { CreateNoteNavbar } from "./CreateNoteNavbar";

// export const NoteReadAndUpdate = () => {
//   const note = {
//     title: "Purpose of life",
//     timeStamp: "Sun, 29 Jan 24",
//     text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, recusandae. Explicabo, maiores nemo quisquam, itaque sint nobis repellendus fugit ad fuga, ea minima iusto repudiandae magni veritatis quia atque aspernatur rerum. Dicta, nihil.",
//   };
//   return (
//     <>
//       <div className="flex flex-col gap-4 px-2 py-3">
//         <CreateNoteNavbar></CreateNoteNavbar>
//         <p className="font-bold text-4xl">{note.title}</p>
//         <p className="text-gray-500">{note.timeStamp}</p>
//         <p>{note.text}</p>
//       </div>
//     </>
//   );
// };

import React, { useState } from "react";
import { CreateNoteNavbar } from "./CreateNoteNavbar";

export const NoteReadAndUpdate = () => {
  // State to manage whether the component is in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Note data
  const [note, setNote] = useState({
    title: "Purpose of life",
    timeStamp: "Sun, 29 Jan 24",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, recusandae. Explicabo, maiores nemo quisquam, itaque sint nobis repellendus fugit ad fuga, ea minima iusto repudiandae magni veritatis quia atque aspernatur rerum. Dicta, nihil.",
  });

  // Handlers for input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 px-2 py-3">
      <CreateNoteNavbar />
      {isEditing ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="font-bold text-4xl bg-transparent border-none outline-none"
          />
          <input
            type="text"
            name="timeStamp"
            value={note.timeStamp}
            onChange={handleChange}
            className="text-gray-500 bg-transparent border-none outline-none"
          />
          <textarea
            name="text"
            value={note.text}
            onChange={handleChange}
            className="bg-transparent border-none outline-none resize-none"
            rows={4}
          />
        </div>
      ) : (
        <div>
          <p className="font-bold text-4xl">{note.title}</p>
          <p className="text-gray-500">{note.timeStamp}</p>
          <p>{note.text}</p>
        </div>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};
