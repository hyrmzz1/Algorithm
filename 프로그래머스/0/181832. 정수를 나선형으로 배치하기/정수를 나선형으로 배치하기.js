function solution(n) {
    const answer = Array.from({ length: n }, () => new Array(n).fill(0));
    
    // right -> down -> left -> top 순으로 방향 전환
    let y = 0, x = 0;   // 현 위치
    let dir = 0;    // 방향 인덱스
    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];
    let num = 1;
    
    while (num <= n * n) {
        answer[y][x] = num++;
        
        // 다음 위치
        let ny = y + dy[dir]
        let nx = x + dx[dir]
        
        // 방향 전환 여부 확인 - 영역 내부, 아직 채워지지 않은 칸
        if (ny >= n || nx >= n || ny < 0 || nx < 0 || answer[ny][nx] !== 0){
            dir = (dir + 1) % 4;
            ny = y + dy[dir];
            nx = x + dx[dir];
        }
        
        // 다음 위치로 이동
        y = ny;
        x = nx;
    }
    
    return answer;
}