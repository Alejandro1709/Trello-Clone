import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex flex-col text-white min-h-screen'>
      {/* NAVBAR STARTS */}
      <Navbar />
      {/* NAVBAR ENDS */}
      <main className='flex flex-row flex-1'>
        {/* SIDEBAR STARTS */}
        <Sidebar />
        {/* SIDEBAR ENDS */}

        {/* WORKSPACE SECTION STARTS */}
        <section className='relative flex-1 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 text-black'>
          <nav className='flex items-center px-4 absolute top-0 w-full h-14 bg-[#191B23]/80 text-white'>
            <h2 className='font-semibold text-md'>WORKSPACE Nab</h2>
          </nav>
        </section>
        {/* WORKSPACE SECTION ENDS */}
      </main>
    </div>
  );
}

export default App;
