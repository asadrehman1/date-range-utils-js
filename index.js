/**
 * Calculate the number of days between two dates (inclusive)
 * @param {string|Date} start - Start date
 * @param {string|Date} end - End date
 * @returns {number}
 */
export function daysBetween(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate - startDate;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Check if two date ranges overlap
 * @param {{start: string|Date, end: string|Date}} range1
 * @param {{start: string|Date, end: string|Date}} range2
 * @returns {boolean}
 */
export function isOverlap(range1, range2) {
  const start1 = new Date(range1.start);
  const end1 = new Date(range1.end);
  const start2 = new Date(range2.start);
  const end2 = new Date(range2.end);
  return start1 <= end2 && start2 <= end1;
}

/**
 * Generate an array of dates in a range (inclusive)
 * @param {string|Date} start - Start date
 * @param {string|Date} end - End date
 * @returns {string[]} - Array of dates in YYYY-MM-DD format
 */
export function range(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dates = [];
  let current = new Date(startDate);
  while (current <= endDate) {
    dates.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

if (typeof module !== "undefined") {
  module.exports = { daysBetween, isOverlap, range };
}