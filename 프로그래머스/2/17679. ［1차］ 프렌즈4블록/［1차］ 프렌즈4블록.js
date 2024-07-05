function solution(m, n, board) {
    board = board.map(col => col.split(''));
    const newBoard = [...board];
    
    while (true) {
        let removeBool = false;    // 사라질 블록 유무
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j] === board[i][j+1] &&
                    board[i][j] === board[i+1][j] &&
                    board[i][j] === board[i+1][j+1]
                ){
                    newBoard[i][j] = '';
                    newBoard[i][j+1] = '';
                    newBoard[i+1][j] = '';
                    newBoard[i+1][j+1] = '';
                    removeBool = true;
                }
            }
        }
        
        if (!removeBool) break;  // 사라질 블록 없을 경우 게임 끝
        
        // 재정렬
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                return newBoard
                if (newBoard[i+1][j] === '') {
                    newBoard[i+1][j] = newBoard[i][j];
                    newBoard[i][j] = '';
                    
                }
            }
        }
        
        board = [...newBoard];
    }
    
    return board;
}