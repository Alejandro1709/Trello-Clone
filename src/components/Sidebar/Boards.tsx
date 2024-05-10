const Boards = () => {
  return (
    <ul className='flex flex-col gap-0.5'>
      <li className='flex flex-row gap-2 p-2 bg-[#5D5F65] items-center cursor-pointer hover:bg-[#434549]'>
        {/* Board Image */}
        <div className='flex justify-center items-center text-xs text-black w-6 h-6 bg-red-200 rounded-md'>
          DM
        </div>
        <h3 className='text-[#9FADBD]'>Tablero Da Mario</h3>
      </li>
    </ul>
  );
};

export default Boards;
