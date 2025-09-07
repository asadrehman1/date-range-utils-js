# date-range-utils-js 📅

A tiny and **lightweight JavaScript utility** to **compute date ranges, differences, and overlaps**.  

Perfect for **booking apps, calendars, scheduling tools, and analytics dashboards**.  

---

## Features

- Calculate the number of days between two dates.
- Check if two date ranges overlap.
- Generate an array of dates in a range.
- Works in **Node.js** and **browser/ESM projects**.
- Lightweight, zero dependencies.

---

## Installation

```bash
npm install date-range-utils-js
```

or with Yarn:

```bash
yarn add date-range-utils-js
```

---

## Usage

```js
import { daysBetween, isOverlap, range } from "date-range-utils-js";

// Days between two dates
console.log(daysBetween("2025-09-01", "2025-09-06")); 
// Output: 5

// Check if two date ranges overlap
console.log(
  isOverlap(
    { start: "2025-09-01", end: "2025-09-05" },
    { start: "2025-09-04", end: "2025-09-06" }
  )
); 
// Output: true

console.log(
  isOverlap(
    { start: "2025-09-01", end: "2025-09-05" },
    { start: "2025-09-06", end: "2025-09-07" }
  )
); 
// Output: false

// Generate an array of dates in a range
console.log(range("2025-09-01", "2025-09-03")); 
// Output: ["2025-09-01", "2025-09-02", "2025-09-03"]
```

---

## API

| Function | Description |
|----------|-------------|
| `daysBetween(start, end)` | Returns the number of days between two dates |
| `isOverlap(range1, range2)` | Returns `true` if two date ranges overlap |
| `range(start, end)` | Returns an array of dates in the range |

---

## Why Use This?

- **Reusable**: Works in Node.js and frontend apps.  
- **Lightweight**: Zero dependencies, small footprint.  
- **Practical**: Handles date calculations for real world applications like booking systems, calendars, and analytics dashboards.

---

## Author

Asad Rehman — [GitHub](https://github.com/asadrehman1)

---

## License

MIT © 2025 Asad Rehman
