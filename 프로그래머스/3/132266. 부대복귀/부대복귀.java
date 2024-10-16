// 1. 인접 리스트 생성
// 2. 도착지에서 모든 노드로의 최단 거리 계산
// 3. sources 순회, 각 요소가 도착지에 도달할 수 있는 최단 거리를 answer에 push
import java.util.*;

class Solution {
    public int[] solution(int n, int[][] roads, int[] sources, int destination) {
        int[] answer = new int[sources.length];
        List<List<Integer>> adjList = new ArrayList<>();    // 2차원 리스트
        
        for (int i = 0; i <= n; i++) {
            adjList.add(new ArrayList<>()); // 각 행에 배열 넣기
        }
        
        for (int[] road: roads) {
            int a = road[0];
            int b = road[1];
            
            adjList.get(a).add(b);
            adjList.get(b).add(a);
        }
        
        Queue<Integer> queue = new ArrayDeque<>();
        boolean[] visited = new boolean[n + 1];
        int[] dist = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        
        queue.add(destination);
        visited[destination] = true;
        dist[destination] = 0;
        
        while (!queue.isEmpty()) {
            int curr = queue.poll();
            
            for (int adj: adjList.get(curr)) {
                if (!visited[adj]) {
                    queue.add(adj);
                    visited[adj] = true;
                    dist[adj] = dist[curr] + 1;
                }
            }
        }
        
        for (int i = 0; i < sources.length; i++) {
            answer[i] = (dist[sources[i]]== Integer.MAX_VALUE) ? -1 : dist[sources[i]];
        }
         
        return answer;
    }
}