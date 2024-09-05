function solution(s) {
    const num = s.split(' ').map(elem => Number(elem));
    num.sort((a, b) => a - b);
    
    return `${num[0]} ${num[num.length-1]}`;
}