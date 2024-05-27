//todo
function solution(n, t, m, p) {
    let str = ''
    
    let i = 0;
    while (str.length < m * t) {
        let elem = i.toString(n).toUpperCase().split('');
        str += elem.join('');
        i++;
    }
    
    let answer = '';
    let j = p - 1;
    while (answer.length < t) {
        answer += str[j];
        j += m;
    }
    
    return answer;
}