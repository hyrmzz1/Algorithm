function solution(n) {
    const answer = [];  // 배열 안 요소가 추가되도 배열 자체가 재정의된건 아니니까 const 사용.
    for(i = 1; i <= n; i += 2){ // i가 계속 홀수
        answer.push(i);
    }
    
    // 배열 요소 오름차순할 필요가 없다. 조건문에서 i++ 이므로 홀수 작은 순으로 push 하니까!
    /*
    answer = answer.sort(function(a, b){
        return a - b;
    })
    */
    return answer;
}