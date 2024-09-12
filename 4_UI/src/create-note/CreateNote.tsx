import { CreateNoteNavbar } from "./CreateNoteNavbar";

export const CreateNote = () => {
  const note = {
    title: "Purpose of life",
    timeStamp: "Sun, 29 Jan 24",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, recusandae. Explicabo, maiores nemo quisquam, itaque sint nobis repellendus fugit ad fuga, ea minima iusto repudiandae magni veritatis quia atque aspernatur rerum. Dicta, nihil.",
  };
  return (
    <>
      <div className="flex flex-col gap-4 px-2 py-3">
        <CreateNoteNavbar></CreateNoteNavbar>
        <p className="font-bold text-4xl">{note.title}</p>
        <p className="text-gray-500">{note.timeStamp}</p>
        <p>{note.text}</p>
      </div>
    </>
  );
};
