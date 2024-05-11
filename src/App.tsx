import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import Backdrop from './components/Backdrop';
import BoardForm from './components/Backdrop/BoardForm';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className='flex flex-col text-white min-h-screen'>
      {isModalOpen ? (
        <Backdrop>
          <BoardForm />
        </Backdrop>
      ) : null}

      {/* NAVBAR STARTS */}
      <Navbar />
      {/* NAVBAR ENDS */}
      <main className='flex flex-row flex-1'>
        {/* SIDEBAR STARTS */}
        <Sidebar onCreateBoard={setIsModalOpen} />
        {/* SIDEBAR ENDS */}

        {/* WORKSPACE SECTION STARTS */}
        <Workspace />
        {/* WORKSPACE SECTION ENDS */}
      </main>
    </div>
  );
}

export default App;
