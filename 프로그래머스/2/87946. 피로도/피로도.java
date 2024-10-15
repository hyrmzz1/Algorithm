import java.util.*;

class Solution {
    // 클래스 내의 모든 인스턴스에서 공유하기 위해 static 키워드 사용
    static int answer = 0;
    static boolean[] visited;
    
    public int solution(int k, int[][] dungeons) {
        visited = new boolean[dungeons.length]; // 모든 요소 false로 초기화
        DFS(k, 0, dungeons);
        return answer;
    }
    
    // 반환하지 않으므로 void형 사용
    public void DFS(int piro, int cnt, int[][] dungeons) {
        answer = Math.max(cnt, answer);
        
        for (int i = 0; i < dungeons.length; i++) {
            if (!visited[i] && piro >= dungeons[i][0]) {
                visited[i] = true;
                DFS(piro - dungeons[i][1], cnt + 1, dungeons);
                visited[i] = false;
            }
        }
    }
}