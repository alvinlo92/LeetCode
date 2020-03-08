/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let tol = [];
    for (let i = A.length - 1; i >= 0; i--) {
        let sum = K + +A[i];
        tol.push((sum % 10) + '');
        K = Math.floor(sum / 10);
        if (i === 0 && K > 0) {
            A.unshift("0");
            i = 1;
        }
    }
    return tol.reverse();
};