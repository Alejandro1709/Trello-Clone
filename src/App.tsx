function App() {
  return (
    <div className='flex flex-col text-white min-h-screen'>
      {/* MAIN NAV STARTS */}
      <nav className='h-12 bg-[#1D2126] border-b border-[#2C323B]'>NAV</nav>
      {/* MAIN NAV ENDS */}

      <main className='flex flex-row flex-1'>
        {/* SIDEBAR STARTS */}
        <aside className='bg-[#191B23] w-60 border-r border-[#2C323B]'>
          <nav className='flex justify-center items-center h-14 border-b bg-[#191B23] border-[#2C323B]'>
            <h2 className='text-[#9FADBD] font-semibold'>Trello Workspaces</h2>
          </nav>

          {/* Boards Section*/}
          <div className='flex flex-col'>
            <h2 className='font-semibold p-2 text-[#9FADBD]'>Sus tableros</h2>

            {/* Boards */}
            <ul className='flex flex-col gap-0.5'>
              <li className='flex flex-row gap-2 p-2 bg-[#5D5F65] items-center cursor-pointer hover:bg-[#434549]'>
                {/* Board Image */}
                <div className='flex justify-center items-center text-xs text-black w-6 h-6 bg-red-200 rounded-md'>
                  DM
                </div>
                <h3 className='text-[#9FADBD]'>Tablero Da Mario</h3>
              </li>
            </ul>
          </div>
        </aside>
        {/* SIDEBAR ENDS */}

        <section className='flex-1 bg-slate-200 text-black'>
          <nav className='h-14 border-b bg-[#191B23] text-white border-[#2C323B]'>
            WORKSPACE Nab
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
