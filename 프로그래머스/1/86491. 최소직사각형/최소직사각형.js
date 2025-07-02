function solution(sizes) {
    let answer = 1;
    const sortedSizes = sizes.map(row => row.sort((a, b) => b - a));
    
    answer *= Math.max(...sortedSizes.map(size => size[0]));
    answer *= Math.max(...sortedSizes.map(size => size[1]));
    
    return answer;
}