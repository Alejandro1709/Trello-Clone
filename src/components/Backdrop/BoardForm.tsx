import { X } from "lucide-react";
import { useModalStore } from "../../stores/modalStore";
import { useState } from "react";
import slugify from "slugify";
import { useBoardStore } from "../../stores/boardStore";
import IBoard from "../../types/board";

const BoardForm = () => {
  const [input, setInput] = useState<string>("");

  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const setIsModalOpen = useModalStore((state) => state.setModalOpen);

  const boards = useBoardStore((state) => state.boards);
  const setBoards = useBoardStore((state) => state.setBoards);

  const handleCreateBoard = () => {
    const newBoard: IBoard = {
      id: boards.length + 1,
      title: input,
      slug: slugify(input.toLowerCase()),
      lists: [
        {
          id: 1,
          title: "To Do",
          items: [],
        },
        {
          id: 2,
          title: "In Progress",
          items: [],
        },
        {
          id: 3,
          title: "Done",
          items: [],
        },
      ],
    };

    setBoards([...boards, newBoard]);

    localStorage.setItem("boards", JSON.stringify([...boards, newBoard]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateBoard();

    setIsModalOpen(false);
  };

  return (
    <dialog open={isModalOpen} className="w-[500px] p-4 rounded shadow">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <header className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-medium">Create new board</h2>
          <button onClick={() => setIsModalOpen(false)}>
            <X />
          </button>
        </header>

        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Dummy board"
            className="outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button className="bg-[#1D2126] text-white w-full p-1.5 rounded-md">
          Create Board
        </button>
      </form>
    </dialog>
  );
};

export default BoardForm;
