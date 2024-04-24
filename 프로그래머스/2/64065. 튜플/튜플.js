function solution(s) {
    let arr = s.replaceAll('{', '')
                .replace('}}', '')
                .split('},');
    
    let tmpArr = [];
    for (let i = 0; i < arr.length; i++) {
        tmpArr.push(arr[i].split(','))
    }
    tmpArr.sort((a, b) => a.length - b.length);
    
    const answer = [];
    tmpArr.forEach(innerArr => {
        innerArr.forEach(elem => {
            if (!answer.includes(Number(elem))) answer.push(Number(elem));
        })
    })
    
    return answer;
}