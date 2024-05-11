import { useBoardStore } from '../../stores/boardStore';
import Boards from './Boards';

const BoardSection = () => {
  const boards = useBoardStore((state) => state.boards);

  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold p-2 text-[#9FADBD]'>Your boards</h2>

      {/* BOARDS STARTS */}
      <Boards boards={boards} />
      {/* BOARDS ENDS */}
    </div>
  );
};
export default BoardSection;
