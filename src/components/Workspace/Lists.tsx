import { useBoardStore } from "../../stores/boardStore";
import ListItem from "./ListItem";

const Lists = () => {
  const selectedBoard = useBoardStore((state) => state.selectedBoard);

  return (
    <ul className="flex flex-row gap-4 text-white">
      {selectedBoard?.lists?.map((list) => (
        <ListItem key={list.id} list={list} />
      ))}
    </ul>
  );
};

export default Lists;
