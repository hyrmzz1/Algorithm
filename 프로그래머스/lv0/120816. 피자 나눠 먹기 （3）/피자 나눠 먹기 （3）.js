function solution(slice, n) {
    let answer = 0;
    
    if (slice >= n){
        answer = 1;
    } else{     // slice < n
        if(n % slice === 0){
            answer = n / slice;
        } else{
            answer = Math.floor(n / slice) + 1;
        }
    }
    return answer;
}