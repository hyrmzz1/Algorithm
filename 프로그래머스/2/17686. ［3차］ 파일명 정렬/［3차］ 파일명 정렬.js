// 1. 파일명을 HEAD, NUMBER, TAIL로 나누기
// 2. 정렬
function solution(files) {
    const answer = [];

    // NUMBER -> 한 글자에서 최대 다섯 글자 사이의 연속된 숫자
    // HEAD -> NUMBER 전, TAIL -> NUMBER 후
    const numberRegex = /\d{1,5}/i;
    
    files.forEach(file => {
        const number = file.match(numberRegex)[0];
        const numberIdx = file.search(numberRegex);
        
        const head = file.slice(0, numberIdx);
        const tail = file.slice(numberIdx + number.length);
        
        answer.push([head, number, tail]);
    })
    
    answer.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase())
                || Number(a[1]) - Number(b[1]))
    
    return answer.map(arr => arr.join(''));
}