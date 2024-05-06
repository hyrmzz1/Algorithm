function solution(n, words) {
    let idx = -1;
    
    for (let i = 1; i < words.length; i++) {
        if (words.slice(0, i).includes(words[i]) || words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
            idx = i;
            break;
        }
    }
    
    if (idx === -1) return [0, 0]
    else return [idx % n + 1, Math.floor(idx / n) + 1];
}