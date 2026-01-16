# Reflection on readingTracker.js

## What was the most helpful aspect of this code's structure?

The most helpful aspect of this code's structure was the clear separation of concerns through well-defined functions. Each function has a single, specific purpose (adding entries, calculating totals, finding the most-read book, and printing summaries), which makes the code easy to understand and maintain. The use of descriptive variable names like `readingLog`, `bookCounts`, and `maxCount` immediately communicated the purpose of each data structure without needing extensive comments.

Additionally, the consistent use of objects within an array for the `readingLog` data structure was very practical. Having uniform objects with `day`, `book`, and `minutes` properties made it straightforward to loop through entries and access specific data points using dot notation. This pattern is scalable and would work well even with hundreds of reading entries.

## What part was confusing or took longer to understand?

The `mostReadBook()` function took the longest to understand because it uses a two-step process to find the result. First, it builds the `bookCounts` object by iterating through the log, then it iterates through that object to find the book with the highest count. The concept of using an object as a "lookup table" or "counter" was not immediately obvious at first glance.

Specifically, the line `if (!bookCounts[entry.book])` uses JavaScript's truthy/falsy evaluation combined with bracket notation for object access, which requires understanding multiple concepts at once. It would have been slightly clearer with a comment explaining that this checks whether the book has been encountered before. Additionally, the function name `mostReadBook()` could be interpreted as "most time spent reading" versus "most frequently appearing in the log," which might cause confusion about what the function actually returns.
