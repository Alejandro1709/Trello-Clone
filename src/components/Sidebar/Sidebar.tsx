import BoardSection from './BoardSection';

const Sidebar = () => {
  return (
    <aside className='bg-[#191B23] w-60 border-r border-[#2C323B]'>
      <nav className='flex justify-center items-center h-14 border-b bg-[#191B23] border-[#2C323B]'>
        <h2 className='text-[#9FADBD] font-semibold'>Trello Workspaces</h2>
      </nav>

      {/* BOARDS SECTION STARTS */}
      <BoardSection />
      {/* BOARDS SECTION ENDS */}
    </aside>
  );
};

export default Sidebar;
