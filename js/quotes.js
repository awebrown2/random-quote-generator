const data = JSON.parse(quoteData);
const quotes = data.quotes;
let randomQuote = null;
const generateQuote = document.getElementById('btn').onclick = () => {
  const currentQuote = document.querySelector('p#quote').innerHTML;

  createQuote = () => {
    randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    return noDupes(randomQuote);
  };

  // make sure there's a fresh quote each time, no duplicates
  noDupes = (randomQuote) => currentQuote === randomQuote.quote ? createQuote() : null;

  createQuote();

  document.querySelector('p#quote').innerHTML = randomQuote.quote;
  document.querySelector('span cite#cite').innerHTML = randomQuote.attrib;
};

generateQuote();
