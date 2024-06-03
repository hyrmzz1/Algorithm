function solution(board, moves) {
    const stack = []    // 바구니
    let cnt = 0;
    
    moves.forEach(row => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][row - 1] !== 0) {
                if (board[i][row - 1] === stack[stack.length - 1]) {
                    stack.pop();
                    cnt += 2;
                } else {
                    stack.push(board[i][row - 1]);
                }
                board[i][row - 1] = 0;
                break;
            }
        }
    })
    
    return cnt;
}