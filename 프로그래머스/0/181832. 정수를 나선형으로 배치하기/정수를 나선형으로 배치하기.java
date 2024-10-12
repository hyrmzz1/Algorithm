class Solution {
    public int[][] solution(int n) {
        // `int[][] answer = {};`는 초기 크기를 지정하지 않은 상태에서 배열을 선언하는 것이므로 빈 2차원 배열이 생성되며, 이 형태는 고정된 값으로 초기화할 때만 사용할 수 있다. (선언과 동시에 초기 값이 있는 경우에만 사용 가능. 동적 크기 조정 X)
        int[][] answer = new int[n][n]; // nxn 크기의 2차원 배열 생성, 모든 값 0으로 초기화
        
        // right -> down -> left -> top 순으로 방향 전환
        int y = 0, x = 0;   // 현 위치
        int dir = 0;    // 방향 인덱스
        int[] dy = {0, 1, 0, -1};
        int[] dx = {1, 0, -1, 0};
        int num = 1;
        
        while (num <= n * n) {
            answer[y][x] = num++;
            
            // 다음 위치
            int ny = y + dy[dir];
            int nx = x + dx[dir];
            
            // 다음 위치 접근 가능한지 확인
            if (ny >= n || nx >= n || ny < 0 || nx < 0 || answer[ny][nx] != 0) {
                dir = (dir + 1) % 4;    // 접근할 수 없으므로 방향 전환
                
                // 방향 전환 후 다음 위치 다시 계산
                ny = y + dy[dir];
                nx = x + dx[dir];
            }
            
            // 다음 위치로 이동
            y = ny;
            x = nx;
        }
        
        return answer;
    }
}