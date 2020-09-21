/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  let hash = {};
  for (let i = 0; i < trips.length; i++) {
      const [passengers, start, end] = trips[i];
      for (let j = start; j < end; j++) {
          hash[j] ? hash[j] += passengers : hash[j] = passengers;
          if (hash[j] > capacity) return false;
      }
  }
  return true;
};