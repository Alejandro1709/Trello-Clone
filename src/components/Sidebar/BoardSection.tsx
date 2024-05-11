import { useBoardStore } from '../../stores/boardStore';
import Boards from './Boards';

const BoardSection = () => {
  const boards = useBoardStore((state) => state.boards);

  const handleCreateBoard = () => {};

  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold p-2 text-[#9FADBD]'>Your boards</h2>
      {/* BOARDS STARTS */}
      <Boards boards={boards} />
      {/* BOARDS ENDS */}
      <button className='bg-[#1D2126] mt-1.5 p-2'>Add Board</button>
    </div>
  );
};
export default BoardSection;
