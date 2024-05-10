import { CirclePlus, MoreHorizontal } from 'lucide-react';

const ListItem = () => {
  return (
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
  );
};

export default ListItem;
