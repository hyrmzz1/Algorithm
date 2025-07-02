function solution(sizes) {
    const sortedSizes = sizes.map(row => row.sort((a, b) => b - a));
    
    const width = sortedSizes.reduce((acc, cur) => cur[0] > acc ? cur[0] : acc , 1);
    const height = sortedSizes.reduce((acc, cur) => cur[1] > acc ? cur[1] : acc , 1);
    
    return width * height;
}