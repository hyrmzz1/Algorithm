function solution(arr1, arr2) {
    const ans = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(null));
    
    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans[0].length ; j++) {
            for(let k = 0; k < arr2.length; k++) {
                ans[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return ans;
}