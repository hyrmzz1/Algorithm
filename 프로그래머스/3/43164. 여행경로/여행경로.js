function solution(tickets) {
    const answer = [];
    tickets.sort(); // 가능한 경로 중 알파벳 순으로 빠른 것 반환하기 위함
    console.log(tickets)
    const visited = new Array(tickets.length).fill(0); // ticket 사용 여부
    
    const DFS = (departure, arr) => {
        arr.push(departure);
        
        if (arr.length === tickets.length + 1) {
            answer.push(...arr);
            return true;    // 경로 찾음
        }
        
        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i];
            
            if (from === departure && !visited[i]) {
                visited[i] = 1; // 방문처리
                if (DFS(to, arr)) return true;   // 경로 완성
                visited[i] = 0; // 잘못된 길 -> 방문처리 취소
            }
        }
        
        arr.pop();  // 잘못된 경로
        return false;   // 경로 없음
    }
    
    DFS('ICN', []);
    
    return answer;
}