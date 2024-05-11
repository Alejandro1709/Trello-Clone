import { useBoardStore } from '../../stores/boardStore';
import type IBoard from '../../types/board';

type BoardProps = {
  boards: IBoard[];
};

const Boards = ({ boards }: BoardProps) => {
  const setSelectedBoard = useBoardStore((state) => state.setSelectedBoard);

  const handleClick = (board: IBoard) => {
    setSelectedBoard(board);
  };

  return (
    <ul className='flex flex-col gap-0.5 border-b border-[#2C323B]'>
      {boards.map((board) => (
        <li
          className='flex flex-row gap-2 p-2 bg-[#5D5F65] items-center cursor-pointer hover:bg-[#434549]'
          key={board.slug}
          onClick={() => handleClick(board)}
        >
          {/* Board Image */}
          <div className='flex justify-center items-center text-xs text-black w-6 h-6 bg-red-200 rounded-md'>
            DM
          </div>
          <h3 className='text-[#9FADBD]'>{board.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Boards;
