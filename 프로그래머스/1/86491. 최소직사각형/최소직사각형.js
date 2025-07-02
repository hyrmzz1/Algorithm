function solution(sizes) {
    const sortedSizes = sizes.map(row => row.sort((a, b) => b - a));
    
    const width = Math.max(...sortedSizes.map(size => size[0]));
    const height = Math.max(...sortedSizes.map(size => size[1]));
    
    return width * height;
}