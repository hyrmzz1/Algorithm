//todo
function solution(n, t, m, p) {
    const num = [];
    
    let i = 0;
    while (num.length < m * t) {
        let elem = i.toString(n).toUpperCase().split('');
        num.push(elem);
        i++;
    }
    
    const str = num.flat();
    
    let answer = ''
    let cnt = 0
    for (let j = 0; j < str.length; j++) {
        if (cnt === t) break;
        
        if (j % m === p - 1) {
            answer += str[j];
            cnt++;
        }
    }
    
    return answer;
}