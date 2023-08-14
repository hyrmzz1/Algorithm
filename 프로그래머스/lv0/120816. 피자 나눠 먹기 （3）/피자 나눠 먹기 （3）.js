function solution(slice, n) {
    let answer = 0;
    /*
    if (slice >= n){
        answer = 1;
    } else{     // slice < n
        answer = Math.ceil(n / slice);
    }
    */
    answer = (slice >= n) ? 1 : Math.ceil(n / slice);
    
    return answer;
}