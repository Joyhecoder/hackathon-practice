import React, {useState, useEffect} from 'react'
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

  const [quotes, setQuotes] = useState([])
  const [selectedQuotesList, setSelectedQuotesList] = useState([])

  const getQuote = async () => { 
      let result= await fetch(`https://type.fit/api/quotes`)
      let data = await result.json()
      

      //only get 5 random quotes from the fetch result
      await setQuotes(data)
      const shuffledData = await data.sort(()=> 0.5 - Math.random())
      let selectedQuotes = await shuffledData.slice(0,5)
    
      await setSelectedQuotesList(selectedQuotes)
      console.log(selectedQuotesList);
      
   }

  useEffect(() => {
    getQuote()
    console.log(quotes);
    // const shuffledData = quotes.sort(()=> 0.5 - Math.random())
    // let selectedQuotes = shuffledData.slice(0,5)
  
    // setSelectedQuotesList(selectedQuotes)
    // console.log(selectedQuotesList);
  
    
  }, [])
  console.log(selectedQuotesList);
  
  return (
    <>
    <div className="movingText">
      <div className="animatedText">
        <p className='target'>Plan Ahead! GET IT DONE AHEAD!</p>
      </div>
      <img className="dogPic" src="https://media3.giphy.com/media/1oBwBVLGoLteCP2kyD/giphy.gif" alt="dog working on hw"  />
      

      <div className="quotes">
        {selectedQuotesList.length ==0 ? <>No quote</> 
        :
        selectedQuotesList.map((quote)=>{
            return (
            <div className='quote-box'>
              <h6>By: {quote.author}</h6>
              <span className='quoteText'>{quote.text}</span>
            </div>
            )
        })}
      </div>
    </div>
   
    </>
  )
}

export default App
