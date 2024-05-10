import { CirclePlus, MoreHorizontal } from 'lucide-react';

const Workspace = () => {
  return (
    <section className='flex-1 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 text-black'>
      <nav className='flex items-center px-4 relative top-0 w-full h-14 bg-[#191B23]/80 text-white'>
        <h2 className='font-semibold text-md'>WORKSPACE Nab</h2>
      </nav>

      {/* LISTS HOLDER STARTS */}
      <div className='m-4'>
        {/* LISTS STARTS */}
        <ul className='flex flex-row gap-4 text-white'>
          <li className='w-64 p-2 bg-[#0F1203] rounded-md'>
            <header className='flex flex-row justify-between'>
              <h2>To Do</h2>
              <MoreHorizontal />
            </header>

            {/* LIST ITEMS STARTS */}
            <ul className='my-2'>
              <li className='bg-[#22272C] p-1 w-full rounded-md'>
                <span className='ml-2'>Say Hello World</span>
              </li>
            </ul>
            {/* LIST ITEMS ENDS */}

            <footer>
              <button className='flex flex-row items-center gap-2 hover:bg-[#22272C] p-1 w-full rounded-md'>
                <CirclePlus className='ml-2 w-4 h-4' />
                Add Card
              </button>
            </footer>
          </li>
          <li className='w-64 p-2 bg-[#0F1203] rounded-md'>
            <header className='flex flex-row justify-between'>
              <h2>In Progress</h2>
              <MoreHorizontal />
            </header>

            {/* LIST ITEMS STARTS */}
            <ul className='my-2'>
              <li className='bg-[#22272C] p-1 w-full rounded-md'>
                <span className='ml-2'>Say Hello World</span>
              </li>
            </ul>
            {/* LIST ITEMS ENDS */}

            <footer>
              <button className='flex flex-row items-center gap-2 hover:bg-[#22272C] p-1 w-full rounded-md'>
                <CirclePlus className='ml-2 w-4 h-4' />
                Add Card
              </button>
            </footer>
          </li>
        </ul>
        {/* LISTS ENDS */}
      </div>
      {/* LISTS HOLDER ENDS */}
    </section>
  );
};

export default Workspace;
