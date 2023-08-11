function solution(array) {
    // 오름차순
    array.sort(function(a, b){
        return a - b;
    });
    
    // 중앙값 구하기
    const mid = (array.length - 1) / 2;
    /*
    array의 길이는 홀수로 제한되므로 array.length - 1은 짝수.
    따라서 mid는 항상 정수이므로 Math.floor() 사용할 필요 없음.
    
    만약 array.length - 1이 홀수여서 mid가 소수점 아래 값이 있다면?
    배열의 인덱스값으로 정수가 아닌 값이 들어갈 수 있을까?
    -> 배열의 인덱스는 0과 양의 정수여야 함.
    따라서 index 값이 정수가 아니라면 undefined 반환.
    */
    const answer = array[mid];
    
    return answer;
}