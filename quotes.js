const quotes = [
{
    quote:"love youself",
    author:"joy1"
},
{
    quote:"You can do it",
    author:"joy2"
},
{
    quote:"Trust Yourself",
    author:"joy3"
},
{
    quote:"Be Strong!",
    author:"joy4"
},
{
    quote:"Be There",
    author:"joy5"
}
]

const quotesContainer = document.querySelector("#quotes");
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = (todayQuote.quote).toUpperCase()
author.innerText =`- ${todayQuote.author}`