/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let start = 0;
  let tank = 0;
  
  const gasTol = gas.reduce((a, b) => a + b);
  const costTol = cost.reduce((a, b) => a + b);
  
  if (gasTol < costTol) return -1;
  
  for (let i = 0; i < gas.length; i++) {
      tank += gas[i] - cost[i];
      if (tank < 0) {
          start = i + 1;
          tank = 0;
      }
  }
  return start;
};