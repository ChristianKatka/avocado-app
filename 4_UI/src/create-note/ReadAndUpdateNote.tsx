import React, { useEffect, useState } from "react";
import { selectSelectedNote } from "../notes/store/selectors/notes.selectors";
import { useAppSelector } from "../store/hooks";
import { CreateNoteNavbar } from "./create-note-navbar/CreateNoteNavbar";
import { Note } from "../models/note.model";

export const ReadAndUpdateNote = () => {
  const selectedNote: Note = useAppSelector(selectSelectedNote);

  const now = new Date().toISOString();
  const date = new Date(now); // This is here for read component TODO FIX MODIFY
  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  const [note, setNote] = useState({
    title: "",
    text: "",
    timestamp: "",
  });

  useEffect(() => {
    if (selectedNote) {
      setNote({
        title: selectedNote.title,
        text: selectedNote.text,
        timestamp: new Date(selectedNote.timestamp).toLocaleDateString(
          "en-GB",
          {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "2-digit",
          }
        ),
      });
    }
  }, [selectedNote]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const onUpdateNote = async () => {
    console.log("update this note:");
    console.log(note);
  };

  return (
    <div className="flex flex-col gap-4 px-2 py-3">
      <CreateNoteNavbar createNoteDraft={onUpdateNote} />
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          className="font-bold text-4xl bg-transparent border-none outline-none"
        />
        <p className="text-gray-500">{formattedDate}</p>
        <textarea
          name="text"
          value={note.text}
          onChange={handleChange}
          className="bg-transparent border-none outline-none resize-none"
          rows={25}
        />
      </div>
    </div>
  );
};
