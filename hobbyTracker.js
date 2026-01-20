// Behzad Ghabaei
// CS 81 - Javascript
// Assignment 2A - Module 5
// hobbyTracker.js - .map, .reduce, .filter
// Instructor Seno
// 1/20/2026

/** 
* The array of objects called hobbyLog represents hobby sessions,
* and each object contains day, hobby type, duration in minutes, and the mood.
* We'll get our output using .reduce, .map, and .filter.
*/

const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

/**
* The totalTime function uses the reduce method. The reduce() method runs a function
* on each array element to produce a single value.  A user-supplied "reducer" callback
* function on each element of the array, in order, passing in the return value from
* the calculation on the preceding element. The final result of running the reducer
* across all elements of the array is a single value. Thus making the total time spent 155 minutes.
* Calculates the total duration of all hobby sessions.
* Uses .reduce() to accumulate 'minutes' into a single numeric value.
*/
// 1. totalTime Function uses .reduce() (a higher-order function) to accumulate a single value 
//from the array.
function totalTime(log) {
// 2. Returns the sum of all 'minutes' properties across all session objects. Reduces
//the array to a single sum, starting at 0.
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

/**
* The uniqueHobbies function extracts a list of hobbies and removes duplicates.
* It uses .map() to transform objects into an array of strings (hobby names).
* The map() method creates a new array by performing a function on each array element. 
* (entry.hobby) A data structure called Set, holds a collection of values. A value can be
* part of a set only once, adding it again doesn’t have any effect.  It adds a value to the
* group (but only if it isn’t already a member). Thus the output
* is: Unique hobbies: [ 'drawing', 'reading', 'gaming' ]
*/
// 3. Function extracts all unique hobby names to identify different activities performed.
function uniqueHobbies(log) {
// 4. .map() creates a new array of just strings; 'new Set()' removes duplicates.
  const names = log.map(entry => entry.hobby);
// 5. Returns a spread array containing only unique hobby names. A new array containing only unique values using Spread and Set.
// the spread operator (`...`) converts that set back into a standard array.
  return [...new Set(names)];
}

/**
* The longSessions method has two parameters (log, minMinutes),
* the first parameter uses the filter() method. It creates a shallow copy of
* a portion of a given array, filtered down to just the elements from the 
* given array that pass the test implemented by the provided function.
* The filter() method creates a new array with array elements that pass a test,
* based on a minimum time threshold. (entry.minutes > minMinutes).
* This function returns an array of objects where 'minutes' exceeds minMinutes, which is 30. 
* This is the second parameter (minMinutes).  Thus the output is:
* Sessions longer than 30 min: [
* { day: 'Wednesday', hobby: 'gaming', minutes: 45, mood: 'excited' },
* { day: 'Friday', hobby: 'reading', minutes: 35, mood: 'calm' }
* ]
*/
// 6. Function filters the log for sessions that exceed a specific time threshold.
function longSessions(log, minMinutes) {
// 7. .filter() returns a new array containing only elements that pass the minutes comparison.
 return log.filter(entry => entry.minutes > minMinutes);
}
/**
* The countMood function has two parameters (log, moodType)
* The input "relaxed" is used for moodType. The function returns log.filter
* which is a function looking to match exactly with a string object having "relaxed" as it's mood.
* Thus the output is: Number of relaxed sessions: 1
* It uses the .length method of strings to count matches.
*/
// 8. Function counts how many times a specific mood occurred in the log.
// Uses .filter() to create a sub-array of matches, then returns its length.
function countMood(log, moodType) {
// 9. The filter returns an array; .length provides the count.
// It counts how many sessions match a specific mood string.
// .filter() isolates matching moods, and .length returns the total count as a number.
return log.filter(entry => entry.mood === moodType).length;
}

//Output and printing statements
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));


// 10. NEW TEST: Calling countMood with a different input to verify logic for "focused" sessions.
console.log("Focused sessions:", countMood(hobbyLog, "focused"));
// NEW TEST: Calling uniqueHobbies with different input 
console.log("Number of drawing sessions:", uniqueHobbies(hobbyLog).includes("drawing"));

//Suggest a better function name, reusable code structure, or an added feature.

/* 
  The function `longSessions` could be improved by adding parameter for `minMinutes` 
  ( function longSessions(log, minMinutes = 30)). This function still works 
  without an argument. 
  
  * Create getEntriesBy(log, key, value) function to make reusable for .filter 
  //*****************************************
  function getEntriesBy(log, key, value) {
  if (typeof value === 'number') {
    return log.filter(entry => entry[key] >= value);
  }
  return log.filter(entry => entry[key] === value);
  }
  const total_Time = (log) => log.reduce((sum, session) => sum + session.minutes, 0);
 //*******************************************
// 1. Using filter to find >= 30 minutes.
const long_Sessions = getEntriesBy(hobbyLog, 'minutes', 30);
console.log("Long Sessions:", long_Sessions);

// 2. find moods
const relaxed_Sessions = getEntriesBy(hobbyLog, 'mood', 'relaxed');
console.log("Relaxed:", relaxed_Sessions.length);

// 3. "drawing" 
const drawing_Sessions = getEntriesBy(hobbyLog, 'hobby', 'drawing');
console.log("Drawing:", drawing_Sessions);

// 4. Combine: "reading"
const reading_Time = total_Time(getEntriesBy(hobbyLog, 'hobby', 'reading'));
console.log("Total minutes reading:", reading_Time);

 Another suggestion: The countMood function could be countByProperty(log, property, value).
  count sessions by hobby name, day, or mood without writing new functions.
 */


