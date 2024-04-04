function solution(sizes) {
    sizes.forEach(size => { size.sort((a, b) => b - a); })  // 명함 회전
    
    let maxWidth = 0, maxHeight = 0;
    sizes.forEach(size => {
        if (size[0] > maxWidth) maxWidth = size[0];
        if (size[1] > maxHeight) maxHeight = size[1];
    })
    
    return maxWidth * maxHeight;
}