function solution(n) {
    let answer = [];
    for(i = 1; i <= n; i++){  // n 이하의 홀수 배열에 담기
        if(i % 2 === 1){
            answer.push(i);
        }
    }
    
    // 배열 요소 오름차순할 필요가 없다. n 이하의 홀수 작은 순으로 판별해서 push 하니까!
    /*
    answer = answer.sort(function(a, b){
        return a - b;
    })
    */
    return answer;
}