function solution(n, works) {
    let answer = [];
    if (works.reduce((acc, cur) => acc + cur) < n) return 0;
    
    while (n) {
        works.sort((a, b) => b - a);
        let max = works[0];
        
        for (let i = 0; i < works.length; i++) {
            if (works[i] === max) {
                works[i]--;
                n--;
            } if (!n) break;
        }
    }
    
    return works.reduce((a, b) => a + Math.pow(b, 2), 0);
}