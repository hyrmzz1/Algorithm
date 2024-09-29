function solution(s, skip, index) {
    const filteredAlphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97)).filter(elem => !skip.includes(elem));
    const alphabetMap = new Map();
    filteredAlphabet.forEach((char, i) => alphabetMap.set(char, i));
    
    s = s.split("");
    let answer = '';
    
    // 한 글자씩 변환
    s.forEach(str => {
        const strIdx = alphabetMap.get(str);
        const newStr = filteredAlphabet[(strIdx + index) % filteredAlphabet.length];
        answer += newStr;
    })
    
    return answer;
}