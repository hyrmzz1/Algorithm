function solution(n, arr1, arr2) {
    const answer = new Array(n);
    
    for (let i = 0; i < n; i++) {
        answer[i] = (arr1[i] | arr2[i])
            .toString(2)
            .padStart(n, 0)
            .replace(/1|0/g, (j) => j === '1' ? j = '#' : j = ' ');
    }
    
    return answer;
}