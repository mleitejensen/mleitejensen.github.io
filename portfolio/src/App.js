import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';

function App() {
  const [boxed, setBoxed] = useState(null)

  const clickBox = () => {
    if(boxed){
      api.start({
        from: {height: 600},
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
        to: {height: 600},
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
          <p>This box has not been clicked...YET! </p>
        </>
        {boxed && 
        <>
          <p>
            Wow, you really clicked that box didn't you?
            Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum 
            Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum
          </p>

          <p>
            Wow, you really clicked that box didn't you?
            Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum 
            Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum
          </p>

        </>
        }


        </animated.div>
          
    </div>
  );
}

export default App;
