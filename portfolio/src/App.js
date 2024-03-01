import { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import './App.css';

function App() {
  const [boxed, setBoxed] = useState(true)
  const [rotatedX, setRotatedX] = useState(null)
  const [factor, setFactor] = useState(null)
  const [textCrawl, setTextCrawl] = useState(null)
  const boxRef = useRef(null)

  const [springs, api] = useSpring(() => ({
    from: { height: 0, opacity: 0 },
  }))

  useEffect(() => {
    console.log(boxed)
    api.start({
      to: {height: boxed ? boxRef.current.offsetHeight : 0, opacity: boxed ? 1 : 0,},
      config: {
        mass: 1,
        tension: 170, 
        friction: 26
      },
    })
  },[api, boxed])

  useEffect(() => { // RotateX useEffect
    console.log(rotatedX)
    api.start({// removing the "from" field makes the animation smoother by starting where it is and not where the "from" field says
      to: {rotateX: rotatedX ? "90deg" : '0deg'}
    })
  },[api, rotatedX])

  useEffect(() => { // Factor useEffect
    console.log(factor)
    api.start({ // removing the "from" field makes the animation smoother by starting where it is and not where the "from" field says
      to: {factor: factor ? 0 : 10, scale: factor ? 0.5 : 1, freq: factor ? '0.0, 0.0' : '0.0175, 0.0'},
      config: { duration: 1000 },
    })
  },[api, factor])

  useEffect(() => { // star wars useEffect
    console.log(textCrawl)
    api.start({
      to: {
        rotateX: textCrawl ? "60deg" : "0deg",
        color: textCrawl ? "yellow" : "white",
        backgroundColor: textCrawl ? "#000000" : "#ffffff00",
      },
    })
  },[api, textCrawl])

  console.log()
  return (
    <>
    <div className="App">
      <div className="box" onClick={() => setBoxed(!boxed)}>
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
          </div>

        </animated.div>
      </div>


    </div>
    
    <div className='buttonList'>
      <button onClick={() =>  setRotatedX(!rotatedX)}>Rotate X</button>
      <button onClick={() => setFactor(!factor)}>Factor Text</button>
      <button onClick={() => setTextCrawl(!textCrawl)}>Star Wars</button>

    </div>
    
    </>
  );
}

export default App;
