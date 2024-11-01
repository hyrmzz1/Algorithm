// 누적합
function solution(board, skill) {
    let answer = 0; // 파괴되지 않은 건물 개수
    const delta = Array.from({ length: board.length + 1 }, () => new Array(board[0].length + 1).fill(0));   // 누적합 기록용 배열
    
    // 누적합 기록
    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        const signDegree = type === 1 ? degree * -1 : degree;
        
        delta[r1][c1] += signDegree;
        delta[r2 + 1][c1] -= signDegree;
        delta[r1][c2 + 1] -= signDegree;
        delta[r2 + 1][c2 + 1] += signDegree;
    })
    
    // 누적합 계산 - 행
    for (let c = 0; c < delta[0].length; c++) {
        for (let r = 1; r < delta.length; r++) {
            delta[r][c] += delta[r - 1][c];
        }
    }
    
    // 누적합 계산 - 열
    for (let r = 0; r < delta.length; r++) {
        for (let c = 1; c < delta[0].length; c++) {
            delta[r][c] += delta[r][c - 1];
        }
    }
    
    // board에 누적합 적용, 양수인 요소 개수 계산
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] + delta[i][j] > 0) answer++
        }
    }
    
    return answer;
}

/*
// 정확성 검사 만점, 효율성 검사 0점
function solution(board, skill) {
    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        for (let r = r1; r <= r2; r++) {
            for (let c = c1; c <= c2; c++) {
                type === 1 ? board[r][c] -= degree : board[r][c] += degree
            }
        }
    })
    
    return board.flat().filter(elem => elem > 0).length;
}
*/