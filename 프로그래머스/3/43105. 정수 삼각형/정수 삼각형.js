function solution(triangle) {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {  // 왼쪽 끝
                triangle[i][j] += triangle[i - 1][0];
            } else if (j === triangle[i].length - 1) {    // 오른쪽 끝
                triangle[i][j] += triangle[i - 1][triangle[i - 1].length - 1];
            } else {
                triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
        }
    }
    
    return Math.max(...triangle[triangle.length - 1]);
}