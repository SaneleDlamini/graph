import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './css/style.css';
import TermOne from './components/Term-one';
import TermTwo from './components/Term-two';
import TermThree from './components/Term-three';
import TermFour from './components/Term-four';

function App() {

  const [ percent, setPercent ] = useState(0)
  const [ percentTwo, setPercentTwo ] = useState(0)
  const [ percentThree, setPercentThree ] = useState(0)
  const [ percentFour, setPercentFour ] = useState(0)
  const [ tab, setTab ] = useState('first');

  const handlePercent = (percent) => {
     setPercent(percent);
  }

   const handlePercentTwo = (percent) => {
    console.log(percentTwo);
     setPercentTwo(percent);
  }
   const handlePercentThree = (percent) => {
     setPercentThree(percent);
  }
   const handlePercentFour = (percent) => {
     setPercentFour(percent);
  }

  const handleTerm = (term) => {
    console.log(term)
  }
  return (
    <>
      <div className='tabs container'>
           <span onClick={() => setTab('first')} className={`${tab === 'first' ? 'active-tab' : ''}`}>Term 1</span>
           <span onClick={() => setTab('second')} className={`${tab === 'second' ? 'active-tab' : ''}`}>Term 2</span>
           <span onClick={() => setTab('third')} className={`${tab === 'third' ? 'active-tab' : ''}`}>Term 3</span>
           <span onClick={() => setTab('fourth')} className={`${tab === 'fourth' ? 'active-tab' : ''}`}>Term 4</span>
      </div>
      <div className='forms'>
        {tab === 'first' &&
          <TermOne handlePercent={handlePercent} />
        }
        {tab === 'second' &&
           <TermTwo handlePercentTwo={handlePercentTwo} />
        }
        {tab === 'third' &&
          <TermThree handlePercentThree={handlePercentThree} />
        }
        {tab === 'fourth' &&
          <TermFour handlePercentFour={handlePercentFour} />
        }
      </div>
      <div className='container'>  
         <div className='verticals'>
            <span className='percentage'>
               <span className='percent'>100%</span>
               <span className='percent'>80%</span>
               <span className='percent'>60%</span>
               <span className='percent'>40%</span>
               <span className='percent'>20%</span>
               <span className='percent'>0%</span>
            </span>
            <span className='pole'></span>
            <span className='bar bar-one'>
              <div className='in-bar-one' style={{height : percent+'%'}}></div>
            </span>
            <span className='bar bar-two'>
              <div className='in-bar-one' style={{height : percentTwo+'%'}}></div>
            </span>
            <span className='bar bar-three'>
              <div className='in-bar-one' style={{height : percentThree+'%'}}></div>
            </span>
            <span className='bar bar-four'>
              <div className='in-bar-one' style={{height : percentFour+'%'}}></div>
            </span>
         </div>
           <div className='horizontal'></div>
         <div className='terms'>
            <span className='term'></span>
            <span className='term'>Tern 1</span>
            <span className='term'>Term 2</span>
            <span className='term'>Term 3</span>
            <span className='term'>term 3</span>
         </div><br />
         <div className='statistics'>
            <div className='box'></div><span>The actual percentage</span>
         </div><br />
         <div className='statistics'>
            <div className='box-two'></div><span>Remaining percentage</span>
         </div>
      </div>
      </>
  );
}

export default App;
