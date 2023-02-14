import React from 'react'

const Quote = ({quoteList}) => {
    console.log(quoteList);
    //get 10 random quotes from the quoteList
    const shuffle = quoteList.sort(()=>0.5 - Math.random())
    let random10Quotes = shuffle.slice(0,10)
    console.log(random10Quotes);

  return (
    <>
    <h2>10 Random Quotes to practice passing props</h2>
    <div className='quotes'>
        {random10Quotes.map((quote)=>{
            return (
            <div className="quote-box">
                <h6>By: {quote.author} </h6>
                <span className='quoteText'>{quote.text}</span>
            </div>)
        })}
        

    </div>
    </>
  )
}

export default Quote