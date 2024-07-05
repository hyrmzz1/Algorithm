function solution(m, n, board) {
    board = board.map(col => col.split(''));
    
    while (true) {
        // 각 라운드
        // const newBoard = [...board];    // 얕은 복사
        const newBoard = board.map(row => [...row]);    // 깊은 복사
        let removeBool = false;    // 사라질 블록 유무
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (
                    board[i][j] !== '' &&
                    board[i][j] === board[i][j+1] &&
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
        const reorderBoard = Array.from(Array(m), () => Array(n).fill(''));
        for (let col = 0; col < n; col++) {
            let newRow = m - 1;
            for (let row = m - 1; row >= 0; row--) {
                if (newBoard[row][col] !== '') {
                    reorderBoard[newRow][col] = newBoard[row][col];
                    newRow--;
                }
            }
        }
        
        board = reorderBoard.map(v => [...v]);
    }
    
    return board.map(row => row.filter(elem => elem === '').length).reduce((a, b) => a + b);
}