function solution(n, arr1, arr2) {
    const answer = new Array(n);
    
    for (let i = 0; i < n; i++) {
        answer[i] = (arr1[i] | arr2[i]).toString(2).padStart(n, 0);
        
        let newStr = ''
        for (let j of answer[i]) {
            j === "1" ? newStr += "#" : newStr += " ";
        }
        
        answer[i] = newStr;
    }
    
    return answer;
}