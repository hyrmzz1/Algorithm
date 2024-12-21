function solution(s) {
    const answer = [];
    // 1. s에서 각 집합({})을 숫자로 이루어진 배열로 만들기
    const array = s.slice(2, -2).split("},{").map(group => group.split(',').map(Number));
    
    // 2. 집합 길이별로 나열
    array.sort((a, b) => a.length - b.length)
    
    // 3. answer에 없는 요소 넣기
    array.forEach(group => {
        answer.push(group.filter(elem => !answer.includes(elem))[0])
    })
    
    return answer;
}