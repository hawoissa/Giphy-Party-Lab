//GLOBAL CONSTANTS FOR API
const api_key = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H'
const limit = 9
const rating = "g"
const lang = "en"

//GLOBAL CONSTANTS FOR DOM
const form = document.querySelector(".form");
const submit = document.querySelector("#submit");
const inputEl = document.querySelector("#searchbar");
const imgDiv = document.querySelector(".gif");
const moreButton = document.querySelector(".hidden");

// VARIABLE FOR PAGE NUMBER --Load More
var pageNum = 0;
var offset = 0;

var save;

async function initialLoad() {
   save = "popular";
   let apiUrl = "https://api.giphy.com/v1/gifs/search?"+ "api_key=" + api_key + "&q=popular";
   let response = await fetch(apiUrl);
   let responseData = await response.json();
   generateResults(responseData);
}

initialLoad();

// Event Listiner for submit button
document.addEventListener("submit", getResults);

// Get Results
async function getResults (evt) {
   evt.preventDefault();
   console.log(evt);
   save = evt.target.searchbar.value.toLowerCase();
   let apiUrl = "https://api.giphy.com/v1/gifs/search?"+ "api_key=" + api_key + "&q=" + evt.target.searchbar.value.toLowerCase();
   let response = await fetch(apiUrl);
   let responseData = await response.json();
   generateResults(responseData);
}

/*async function getUrl(apiUrl) {
   let response = await fetch(apiUrl);
   let responseData = await response.json();
   generateResults(responseData);
}*/

function generateResults(gifdata) {
   console.log(gifdata.data);
   imgDiv.innerHTML = ""; 
   for (let i = 0; i < limit; i++) {
      let gif = gifdata.data[i].images.original.url;
      console.log(gif);
      imgDiv.innerHTML += ' <img src="' + gifdata.data[i].images.preview_gif.url + '"></img>'
   }   
}

moreButton.addEventListener("click", showMore);

/*function showMore() {
   for (let i = 0; i < limit; i++) {
      let gif = gifdata.data[i].images.preview_gif.url;
      console.log(gif);
      imgDiv.innerHTML += ' <img src="' + gifdata.data[i].images.preview_gif.url + '"></img>'
   }  
}*/

/*function showMore(evt) {
   console.log(pageNum);
   pageNum++;
   offset++;  
   getResults(evt);
}*/