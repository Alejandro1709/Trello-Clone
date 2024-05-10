function App() {
  return (
    <div className='flex flex-col text-white min-h-screen'>
      <nav className='h-12 bg-[#1D2126] border-b border-[#2C323B]'>NAV</nav>

      <main className='flex flex-row flex-1'>
        <aside className='bg-[#191B23] w-60 border-r border-[#2C323B]'>
          <nav className='h-14 border-b bg-[#191B23] border-[#2C323B]'>
            Sidebar Nab
          </nav>
        </aside>

        <section className='flex-1 bg-slate-200 text-black'>WORKSPACE</section>
      </main>
    </div>
  );
}

export default App;
