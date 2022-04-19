
const movies = require('./data');
// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

 //exercise 1 
// create a fucntion with a variable name and parameter name (arrayMovies
// create a new variable with newArrayDirectors = (is) arrayMovies use the map function. Get the function with the cappu name array 
// return the array + director (direct is the keyname in the object array). 
// console.log getAllDirector(movies) Because you want the information from the list.   

function getAllDirectors(arrayMovies){
  let newArrayDirectos = arrayMovies.map(function (array){
    return array.director;
  });
  console.log(getAllDirectors(movies));
}

// create a new variable with unique users 
// movies reduce (two new parameters, map and object , call function map.set(objdirector and object)creat new map function with values)
// create a new variable with uniqUsers = movies.redue ((parameter names 2x )) call the function
// use map.set function and use obj.director and obj then create a new map and add the new values. 
// console.log ( uniqUsers)

const uniqUsers = [...movies.reduce((map, obj) =>
  map.set(obj.director, obj), new Map()).values()];

  /*console.log(uniqUsers)*/

  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 //
 let dramaMovies = movies.filter(movies=> movies.genre.includes("Drama")&& movies.director.includes("Steven Spielberg"));
 console.log(dramaMovies.length)


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function avgScore (arr){
  const scoreSum = arr.reduce((aScore, currentMovie) => 
  {
    return aScore + currentMovie.score;
  } ,0);

  let total = scoreSum / arr.length;
  return total.toFixed(2)
};

console.log(avgScore(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
const allDramaAvg = movies.filter(dramaGenre => {
  return dramaGenre.genre.includes("Drama");
})
console.log(allDramaAvg)

function avgScoreDrama (array){
  const totalScoreDrama = array.reduce((dramaOn, dramaNum) =>
  {
    return dramaOn + dramaNum.score;
  },0);

  let totalSum = totalScoreDrama / array.length;
  return totalSum.toFixed(2)
};
console.log(avgScoreDrama(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderedYear = movies.sort((previous, next )  => {
if (previous.year > next.year) return 1;
if (previous.year < next.year) return -1;
if(previous.year === 0) return 0;
});

console.log(orderedYear);

const numberYear =[];
movies.forEach(mapYear =>
  {numberYear.push(mapYear.year)})
  console.log(numberYear)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//function orderAlphabetically() {}

const orderTitle = movies.sort((previoustitle, nexttitle) => {
  if(previoustitle.title > nexttitle.title) return 1;
  if(previoustitle.title < nexttitle.title) return -1;
  if(previous.title === 0);
});
console.log(orderTitle);

const numberTitle = [];
movies.forEach(numTitle =>
  {numberTitle.push(numTitle.title)})
  console.log(numberTitle)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    //getAllDirectors,
    //howManyMovies,
    //scoresAverage,
   // dramaMoviesScore,
    //orderByYear,
    //orderAlphabetically,
    //turnHoursToMinutes,
   // bestYearAvg,
  };
}
