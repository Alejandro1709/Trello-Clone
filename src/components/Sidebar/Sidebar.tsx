import BoardSection from './BoardSection';

type SidebarProps = {
  onCreateBoard: (isOpen: boolean) => void;
};

const Sidebar = ({ onCreateBoard }: SidebarProps) => {
  return (
    <aside className='bg-[#191B23] w-60 border-r border-[#2C323B]'>
      <nav className='flex justify-center items-center h-14 border-b bg-[#191B23] border-[#2C323B]'>
        <h2 className='text-[#9FADBD] font-semibold'>Trello Workspaces</h2>
      </nav>

      {/* BOARDS SECTION STARTS */}
      <BoardSection onCreateBoard={onCreateBoard} />
      {/* BOARDS SECTION ENDS */}
    </aside>
  );
};

export default Sidebar;
