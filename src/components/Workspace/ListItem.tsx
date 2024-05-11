import { CirclePlus, MoreHorizontal } from 'lucide-react';
import { type IList } from '../../types/board';

type ListItemProps = {
  list: IList;
};

const ListItem = ({ list }: ListItemProps) => {
  return (
    <li className='w-64 p-2 bg-[#0F1203] rounded-md'>
      <header className='flex flex-row justify-between'>
        <h2>{list.title}</h2>
        <MoreHorizontal />
      </header>

      {/* LIST ITEMS STARTS */}
      <ul className='my-2 space-y-2'>
        {list.items.map((item, idx) => (
          <li className='bg-[#22272C] p-1 w-full rounded-md' key={idx}>
            <span className='ml-2'>{item}</span>
          </li>
        ))}
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
