import React, {useState} from 'react'
import MovingText from 'react-moving-text'
import "./index.css"

const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

const App = () => {
  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])
  const handleChainAnimation = () =>{
    setAnimationIndex(animationIndex + 1)
    setAnimationType(AnimationsForChaining[animationIndex])
  }
  
  return (
    <>
    <div className="movingText">
      {/* <MovingText
      className ="moving"
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="8000ms"
      delay="0s"
      direction="normal"
      timing="linear"
      iteration="infinite"
      fillMode="none">
      Plan Ahead! GET IT DONE AHEAD!
      </MovingText> */}
      <div className="animatedText">
        <p className='target'>Plan Ahead! GET IT DONE AHEAD!</p>
      </div>
      <img className="dogPic" src="https://media3.giphy.com/media/1oBwBVLGoLteCP2kyD/giphy.gif" alt="dog working on hw" />
    </div>
    </>
  )
}

export default App
