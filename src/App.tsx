import React from 'react';
import Game from './feature/Game';


function App() {
  return (
    <section className='bg-cyan-50 min-h-screen'>
        <div className='container p-10'>
            <h1 className='text-cyan-500 text-4xl font-bold tracking-tighter text-center'> Hey Hey, Welcome to the "Tic Tac Toe" game</h1>
            <Game/>
            {/* <h1 className='text-teal-500 text-4xl font-black'> Let Try your first game</h1> */}
        </div>
     
    </section>
  );
}

export default App;