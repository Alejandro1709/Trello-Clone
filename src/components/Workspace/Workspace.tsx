import ListHolder from './ListHolder';

const Workspace = () => {
  return (
    <section className='flex-1 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 text-black'>
      <nav className='flex items-center px-4 relative top-0 w-full h-14 bg-[#191B23]/80 text-white'>
        <h2 className='font-semibold text-md'>WORKSPACE Nab</h2>
      </nav>

      {/* LISTS HOLDER STARTS */}
      <ListHolder />
      {/* LISTS HOLDER ENDS */}
    </section>
  );
};

export default Workspace;
