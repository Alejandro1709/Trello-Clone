import Boards from './Boards';

const BoardSection = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold p-2 text-[#9FADBD]'>Your boards</h2>

      {/* BOARDS STARTS */}
      <Boards />
      {/* BOARDS ENDS */}
    </div>
  );
};
export default BoardSection;
