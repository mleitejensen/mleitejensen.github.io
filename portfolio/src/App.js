import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';

function App() {
  const [boxed, setBoxed] = useState(null)

  const clickBox = () => {
    if(boxed){
      api.start({
        from: {height: 300},
        to: {height: 100},
        config: {
          mass: 1,
          friction: 100,
          tension: 500,
        },
      })
      setBoxed(false)
    } else{
      setBoxed(true)
      api.start({
        from: {height: 100},
        to: {height: 300},
        config: {
          mass: 1,
          friction: 100,
          tension: 500,
        },
      })
    }
  }

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  return (
    <div className="App">
        <animated.div className="box" onClick={clickBox}
          style={{
            borderRadius: 8,
            ...springs
          }}
        >
        
        <>
          This box has not been clicked...YET! <br></br>
        </>
        {boxed && 
        <>
          Wow, you really clicked that box didn't you?
          Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum 
          Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum
        </>
        }


        </animated.div>
          
    </div>
  );
}

export default App;
