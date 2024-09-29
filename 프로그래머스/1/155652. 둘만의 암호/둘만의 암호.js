function solution(s, skip, index) {
    const filteredAlphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97)).filter(elem => !skip.includes(elem));
    
    s = s.split("");
    let answer = '';
    
    // 한 글자씩 변환
    s.forEach(str => {
        const strIdx = filteredAlphabet.indexOf(str);
        const newStr = filteredAlphabet[(strIdx + index) % filteredAlphabet.length];
        answer += newStr;
    })
    
    return answer;
}