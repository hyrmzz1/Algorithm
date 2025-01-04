function solution(m, n, board) {
    let answer = 0; // 지워지는 블록 개수
    board = board.map(col => col.split(''));
    
    while (true) {
        // 1. 2×2 모양 찾기
        let is2x2 = false;
        const deepCopyBoard = board.map(row => [...row]);   // 겹치는 부분 처리 위해 복사
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (
                    board[i][j] !== '' &&
                    board[i][j] === board[i][j + 1] &&
                    board[i][j] === board[i + 1][j] &&
                    board[i][j] === board[i + 1][j + 1]
                ) {
                    is2x2 = true;
                    deepCopyBoard[i][j] = '';
                    deepCopyBoard[i][j+1] = '';
                    deepCopyBoard[i+1][j] = '';
                    deepCopyBoard[i+1][j+1] = '';
                }
            }
        }
        
        // 1-1. 2×2 모양 없다면 반복문 종료
        if (!is2x2) break;
        
        // 1-2. board에 지워진 부분 모두 적용
        board = deepCopyBoard;
        
        // 2. 2×2 모양 블록 지우고 위에 있는 블록 떨어뜨리기
        for (let col = 0; col < n; col++) {   // 각 열 순회
            for (let row = m - 1; row >= 0; row--) {
                if (board[row][col] === '') {
                    for (let k = row - 1; k >= 0; k--) {    // 위로 올라가며 알파벳 찾기
                        if (board[k][col] !== '') {
                            board[row][col] = board[k][col];
                            board[k][col] = '';
                            break;
                        }
                    }
                }
            }
        }
    }
    
    return board.flat().filter(elem => elem === '').length;
}