import { useEffect } from "react";
import { useBoardStore } from "../../stores/boardStore";
import Boards from "./Boards";

type BoardSectionProps = {
  onCreateBoard: (isOpen: boolean) => void;
};

const BoardSection = ({ onCreateBoard }: BoardSectionProps) => {
  const boards = useBoardStore((state) => state.boards);
  const setBoards = useBoardStore((state) => state.setBoards);

  useEffect(() => {
    if (localStorage.getItem("boards")) {
      console.log("yay");
      setBoards(JSON.parse(localStorage.getItem("boards") || "[]"));
    }
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold p-2 text-[#9FADBD]">Your boards</h2>
      {/* BOARDS STARTS */}
      <Boards boards={boards} />
      {/* BOARDS ENDS */}
      <button
        className="bg-[#1D2126] mt-1.5 p-2"
        onClick={() => onCreateBoard(true)}
      >
        Add Board
      </button>
    </div>
  );
};
export default BoardSection;
