/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let col = 0; col < A.length; col++) {
        A[col] = A[col].reverse();
        for (let row = 0; row < A[col].length; row++) {
            A[col][row] === 0 ? A[col][row] = 1 : A[col][row] = 0;
        }
    }
    return A;
};