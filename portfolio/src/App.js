import { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';

function App() {
  const [boxed, setBoxed] = useState(null)
  const [rotatedX, setRotatedX] = useState(null)
  const [factor, setFactor] = useState(null)
  const boxRef = useRef(null)

  const clickBox = () => {
  
    if(boxed){
      api.start({
        from: {height: 0, opacity: 0,},
        to: {height: boxRef.current.offsetHeight, opacity: 1,},
        config: {
          mass: 1,
          tension: 170, 
          friction: 26
        },
      })
      setBoxed(false)
    } else{
      setBoxed(true)
      api.start({
        from: {height: boxRef.current.offsetHeight, opacity: 1,},
        to: {height: 0, opacity: 0,},
        config: {
          mass: 1,
          tension: 170, 
          friction: 26
        },
      })
    }
  }

  const rotateX = () => {
    setRotatedX(!rotatedX)
    api.start({
      from: {rotateX: rotatedX ? "90deg" : '0deg',},
      to: {rotateX: rotatedX ? "0deg" : '90deg'}

    })
  }

  const factoring = () => { // factor: 10,
    setFactor(!factor)
    api.start({
      from: {factor: factor ? 10 : 0 , scale: factor ? 1 : 0.5, freq: factor ? '0.175, 0.0' : '0.0, 0.0'},
      to: {factor: factor ? 0 : 10, scale: factor ? 0.5 : 1, freq: factor ? '0.0, 0.0' : '0.0175, 0.0'},
      config: { duration: 1000 },

    })
  }


  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  console.log()
  return (
    <>
    <div className="App">
      <div className="box" onClick={clickBox}>
        <p>This box has not been clicked...YET! </p>
            
        <animated.div
          style={{
            borderRadius: 8,
            ...springs
          }}
        >
          <div className="openBox" ref={boxRef}>
            <p>
              <br/>
              Wow, you really clicked that box didn't you?
              Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum 
              Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum
            </p>

            <p>
              Wow, you really clicked that box didn't you?
              Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum 
              Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum Lorem Ipsuum
            </p>
          </div>

        </animated.div>
      </div>


    </div>
    
    <div className='buttonList'>
      <button onClick={rotateX}>Rotate X</button>
      <button onClick={factoring}>Factor Text</button>


    </div>
    
    </>
  );
}

export default App;
