import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';

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
        <Workspace />
        {/* WORKSPACE SECTION ENDS */}
      </main>
    </div>
  );
}

export default App;
