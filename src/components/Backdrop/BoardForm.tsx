import { X } from 'lucide-react';

const BoardForm = () => {
  return (
    <dialog open className='w-[500px] p-4 rounded shadow'>
      <form>
        <header className='flex flex-row justify-between items-center'>
          <h2 className='text-2xl font-medium'>Create new board</h2>
          <X />
        </header>
      </form>
    </dialog>
  );
};

export default BoardForm;
