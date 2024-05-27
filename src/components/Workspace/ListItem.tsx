import { CirclePlus, MoreHorizontal } from 'lucide-react';
import { type IList } from '../../types/board';
import { useState } from 'react';

type ListItemProps = {
  list: IList;
};

const ListItem = ({ list }: ListItemProps) => {
  const [listItems, setListItems] = useState<string[]>(list.items);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setListItems((prev) => [...prev, input]);

    setInput('');
    setIsEditing(false);
  };

  return (
    <li className='w-64 p-2 bg-[#0F1203] rounded-md h-fit'>
      <header className='flex flex-row justify-between'>
        <h2>{list.title}</h2>
        <MoreHorizontal />
      </header>

      {/* LIST ITEMS STARTS */}
      <ul className='my-2 space-y-2'>
        {listItems.map((item, idx) => (
          <li className='bg-[#22272C] p-1 w-full rounded-md' key={idx}>
            <span className='ml-2'>{item}</span>
          </li>
        ))}
      </ul>
      {/* LIST ITEMS ENDS */}

      <footer>
        {isEditing ? (
          <form className='bg-[#22272C] p-1 rounded' onSubmit={handleSubmit}>
            <input
              className='bg-transparent outline-none'
              type='text'
              placeholder='Some Text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        ) : null}
        <button
          className='flex flex-row items-center gap-2 hover:bg-[#22272C] p-1 w-full rounded-md'
          onClick={() => setIsEditing(true)}
        >
          <CirclePlus className='ml-2 w-4 h-4' />
          Add Card
        </button>
      </footer>
    </li>
  );
};

export default ListItem;
