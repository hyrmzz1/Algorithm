function solution(sizes) {
    let answer = 1;
    const sortedSizes = sizes.map(row => row.sort((a, b) => b - a));
    
    answer *= sortedSizes.reduce((acc, cur) => cur[0] > acc ? cur[0] : acc, 1);
    answer *= sortedSizes.reduce((acc, cur) => cur[1] > acc ? cur[1] : acc, 1);
    
    return answer;
}