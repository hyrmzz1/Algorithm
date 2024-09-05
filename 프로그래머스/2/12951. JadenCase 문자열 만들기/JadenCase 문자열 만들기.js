function solution(s) {
    let answer = []
    const words = s.split(' ');
    
    words.forEach(word => {
        // 첫 문자는 대문자
        // 그 외의 문자는 소문자
        answer.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    })
    
    return answer.join(' ');
}