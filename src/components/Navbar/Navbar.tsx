import { Bell, CircleUser, HelpCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='flex items-center h-14 bg-[#1D2126] border-b border-[#2C323B]'>
      <div className='flex justify-between items-center mx-4 w-full'>
        {/* MAIN NAV LEFT UL STARTS */}
        <ul className='flex flex-row items-center gap-4'>
          <li>
            <h1 className='font-bold text-[#9FADBD]'>Trello Clone</h1>
          </li>
          <li>Workspaces</li>
          <li>Recents</li>
          <li>Pinned</li>
          <li>Boilerplates</li>
          <li className='p-1 bg-blue-400 hover:bg-blue-300 rounded text-black'>
            <button className='p-0.5'>Create</button>
          </li>
        </ul>
        {/* MAIN NAV LEFT UL ENDS */}

        {/* MAIN NAV RIGHT UL STARTS */}
        <ul className='flex flex-row items-center gap-4'>
          <li className='bg-[#22272C] border border-[#2C323B] rounded'>
            <input
              className='bg-transparent p-1 ml-1'
              type='text'
              placeholder='Buscar'
            />
          </li>
          <li>
            <Bell className='w-4 h-4' />
          </li>
          <li>
            <HelpCircle className='w-4 h-4' />
          </li>
          <li>
            <CircleUser className='w-4 h-4' />
          </li>
        </ul>
        {/* MAIN NAV RIGHT UL ENDS */}
      </div>
    </nav>
  );
};

export default Navbar;
