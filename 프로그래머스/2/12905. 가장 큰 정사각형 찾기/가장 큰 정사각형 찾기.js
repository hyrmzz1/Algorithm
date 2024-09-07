function solution(board) {
    if (board.length <= 1 || board[0].length <= 1) return 1;
    
    let answer = 0;
    
    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[0].length; j++) {
            if (board[i][j] !== 0) {
                board[i][j] = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]) + 1;
                answer = Math.max(answer, board[i][j]);
            }
        }
    }
    
    return answer * answer;
}