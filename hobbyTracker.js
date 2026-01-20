// Behzad Ghabaei
// CS 81 - Javascript
// Assignment 2A - Module 5
// hobbyTracker.js - .map, .reduce, .filter
// Instructor Seno
// 1/20/2026


const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];
/**
What each function does
What each line returns or calculates
How higher-order functions are being used
*/
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}
 /**
What each function does
What each line returns or calculates
How higher-order functions are being used
*/
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}
/**
What each function does
What each line returns or calculates
How higher-order functions are being used
*/
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}
/**
What each function does
What each line returns or calculates
How higher-order functions are being used
*/
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

//Suggest a better function name, reusable code structure, or an added feature. Leave your suggestion as a comment in the file.

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

//new console.log() line with new inputs.
console.log("Focused sessions:", countMood(hobbyLog, "focused"));
