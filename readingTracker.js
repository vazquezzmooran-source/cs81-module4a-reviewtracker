// GitHub Repository: https://github.com/vazquezzmooran-source/cs81-module4a-reviewtracker
// Module 4 Assignment 4A: Review readingTracker.js
// Student: Alan Vásquez

// Weekly reading log
// This array stores reading activity data for each day of the week
// Each object contains: day name, book title, and minutes spent reading
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/**
 * FUNCTION SUMMARY: addReadBook()
 * Purpose: Adds a new reading entry to the log
 * Inputs: day (string), book (string), minutes (number)
 * Output: Modifies the readingLog array by pushing a new entry object
 */
// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  // Creates a new object with the provided parameters
  const newEntry = { day, book, minutes };
  // Pushes the new entry to the end of the readingLog array
  readingLog.push(newEntry);
}

/**
 * FUNCTION SUMMARY: totalReadingMinutes()
 * Purpose: Calculates the total minutes spent reading across all entries
 * Inputs: log (array of reading objects)
 * Output: Returns total (number) - sum of all minutes
 */
// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  // Initialize accumulator variable to store the sum
  let total = 0;
  // Loop through each entry in the log array
  for (let entry of log) {
    // Add the minutes from current entry to the running total
    total += entry.minutes;
  }
  // Return the final calculated total
  return total;
}

/**
 * FUNCTION SUMMARY: mostReadBook()
 * Purpose: Identifies which book was read most frequently (not by time, but by occurrences)
 * Inputs: log (array of reading objects)
 * Output: Returns maxBook (string) - the title of the most frequently appearing book
 */
// Returns the book read most frequently
function mostReadBook(log) {
  // Object to store book titles as keys and their count as values
  const bookCounts = {};
  // Iterate through each log entry
  for (let entry of log) {
    // Check if this book hasn't been counted yet
    if (!bookCounts[entry.book]) {
      // Initialize count to 1 for first occurrence
      bookCounts[entry.book] = 1;
    } else {
      // Increment the count if book was already seen
      bookCounts[entry.book]++;
    }
  }
  
  // Variables to track the book with highest count
  let maxBook = null;
  let maxCount = 0;
  // Loop through the bookCounts object
  for (let book in bookCounts) {
    // Compare current book's count with the maximum found so far
    if (bookCounts[book] > maxCount) {
      // Update maxBook if current count is higher
      maxBook = book;
      // Update maxCount to the new highest value
      maxCount = bookCounts[book];
    }
  }
  // Return the book title with the most occurrences
  return maxBook;
}

/**
 * FUNCTION SUMMARY: printDailySummary()
 * Purpose: Displays a formatted summary of reading activity for each day
 * Inputs: log (array of reading objects)
 * Output: Prints to console - does not return a value
 */
// Prints a summary of minutes read per day
function printDailySummary(log) {
  // Loop through each entry in the log
  for (let entry of log) {
    // Output formatted string with template literals showing day, minutes, and book
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// SUGGESTED IMPROVEMENT:
// The mostReadBook() function currently counts frequency (number of times read)
// but doesn't consider total time spent. A more useful metric might be
// "mostReadByTime()" which sums the minutes for each book.
// This would better represent which book you invested the most time in.

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

// TEST CASE: Adding a new book and verifying it appears in the log
addReadBook("Sunday", "The Martian", 35);
console.log("\nAfter adding Sunday's reading:");
console.log("New total minutes:", totalReadingMinutes(readingLog));
console.log("Updated log length:", readingLog.length); // Should be 7 entries now
