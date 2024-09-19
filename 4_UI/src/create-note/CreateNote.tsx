import React, { useState } from "react";
import { CreateNoteNavbar } from "./CreateNoteNavbar";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { useAppDispatch } from "../store/hooks";
import { createNoteThunk } from "../notes/store/thunks/notes.thunk";

export const CreateNote = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const now = new Date().toISOString();
  const date = new Date(now); // This is here for read component TODO FIX MODIFY
  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  const [note, setNote] = useState({
    title: "My Title",
    text: "Write something here...",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const onCreateNoteDraft = async () => {
    console.log("save this note:");
    const noteDraft = { ...note, timestamp: now };
    console.log(noteDraft);

    try {
      // Dispatch the thunk and unwrap the result to handle success or failure
      await dispatch(createNoteThunk(noteDraft)).unwrap();
      navigate("/");
    } catch (err) {
      console.error("create note failed", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-2 py-3">
      <CreateNoteNavbar createNoteDraft={onCreateNoteDraft} />
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
