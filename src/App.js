import { useState, useEffect } from 'react';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuoteInfo({
          quote: data.content,
          author: data.author,
        });
      });
  };

  return (
    <div className='App'>
      <div id='quote-box'>
        <p id='text'>{quoteInfo.quote}</p>
        <p id='author'>{quoteInfo.author}</p>
        <button id='new-quote' onClick={getNewQuote}>
          New Quote
        </button>
        <a
          href={'http://twitter.com/intent/tweet'}
          target='_blank'
          id='tweet-quote'
          onClick={getNewQuote}
        >
          Tweet it
        </a>
      </div>
    </div>
  );
}

export default App;
