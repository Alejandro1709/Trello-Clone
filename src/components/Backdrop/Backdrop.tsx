import { useLockBodyScroll } from '@uidotdev/usehooks';

type BackdropProps = {
  children: React.ReactNode;
};

const Backdrop = ({ children }: BackdropProps) => {
  useLockBodyScroll();

  return (
    <div className='absolute flex justify-center items-center inset-0 bg-black/70 z-[100]'>
      {children}
    </div>
  );
};

export default Backdrop;
