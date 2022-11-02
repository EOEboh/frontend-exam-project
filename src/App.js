import React, { useState } from 'react';
import './App.css';
import useCounterActions from './utils/useCounterActions';
import ErrorFallback from './components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { TbIndentDecrease, TbIndentIncrease } from 'react-icons/tb';
import { BiReset } from 'react-icons/bi';
import { GiTimeBomb } from 'react-icons/gi';
import { IconContext } from 'react-icons';

function App() {
  
  const [ state, dispatch, useState ] = useCounterActions();
  
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {dispatch({ type: 'reset'})}}
    > 
    <div className="App">
      <header className='header'>
        <h1>Hey, welcome to my Counter App &nbsp;
        <IconContext.Provider value={{ size: '1.4rem', color: '#6C4923'}}>
          <GiTimeBomb />
        </IconContext.Provider>
        </h1>
      </header>
      <main id='state-view'>
        <h2> <span id='count-view'> 
        {state.count}</span></h2>
      </main>
      <section className='btn-section'> 
      <button 
        className='button decrease-btn'
        onClick={() => dispatch({ type: 'decrement'})}>
          Decrease <br /> 
          <IconContext.Provider value={{ size: '1.4rem', color: '#000'}}>
            <TbIndentDecrease />
          </IconContext.Provider>
      </button>
      <button 
        className='button reset-btn'
        onClick={() => dispatch({ type: 'reset'})}>
          Reset <br /> <IconContext.Provider value={{ size: '1.4rem', color: '#000'}}> <BiReset /></IconContext.Provider>
      </button>
      <button 
        className='button increase-btn'
        onClick={() => dispatch({ type: 'increment'})}>
          Increase <br /><IconContext.Provider value={{ size: '1.4rem', color: '#000'}}> <TbIndentIncrease /></IconContext.Provider>
      </button> 
      </section>
      <br />
    </div>
    </ErrorBoundary>
  );
}

export default App;
