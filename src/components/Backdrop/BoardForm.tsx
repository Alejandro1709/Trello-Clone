import { X } from 'lucide-react';
import { useModalStore } from '../../stores/modalStore';

const BoardForm = () => {
  const setIsModalOpen = useModalStore((state) => state.setModalOpen);
  return (
    <dialog open className='w-[500px] p-4 rounded shadow'>
      <form>
        <header className='flex flex-row justify-between items-center'>
          <h2 className='text-2xl font-medium'>Create new board</h2>
          <button onClick={() => setIsModalOpen(false)}>
            <X />
          </button>
        </header>
      </form>
    </dialog>
  );
};

export default BoardForm;
