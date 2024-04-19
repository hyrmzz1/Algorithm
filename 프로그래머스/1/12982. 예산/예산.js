function solution(d, budget) {
    let dSum = d.reduce((acc, cur) => acc + cur);
    
    d.sort((a, b) => a - b);
    while (dSum > budget) { dSum -= d.pop(); }
    
    return d.length;
}