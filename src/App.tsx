function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <nav className='h-12 bg-slate-300'>NAV</nav>
      <main className='flex flex-row flex-1'>
        <aside className='bg-slate-200 w-60'>SIDEBAR</aside>
        <section className='flex-1 bg-slate-100'>WORKSPACE</section>
      </main>
    </div>
  );
}

export default App;
