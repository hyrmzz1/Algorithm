function solution(n, arr1, arr2) {
    const answer = new Array(n);
    
    for (let i = 0; i < n; i++) {
        let temp = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");
        temp = temp.replaceAll("1", "#");
        temp = temp.replaceAll("0", " ");
        answer[i] = temp;
    }
    
    return answer;
}