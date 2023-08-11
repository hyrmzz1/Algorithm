function solution(array) {
    // 오름차순
    array.sort(function(a, b){
        return a - b;
    });
    // 중앙값 구하기
    const mid = Math.floor((array.length - 1) / 2);
    const answer = array[mid];
    
    return answer;
}