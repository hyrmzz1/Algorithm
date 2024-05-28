function solution(tickets) {
    const answer = [];
    
    tickets = tickets.sort();
    const visited = new Array(tickets.length).fill(0);    // 티켓 사용 여부

    const dfs = (from, path) => {
        if (path.length === tickets.length) {
            answer.push(...path, from);
            return true;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            if (visited[i] === 0 && tickets[i][0] === from) {
                visited[i] = 1; // 사용 처리
                if (dfs(tickets[i][1], [...path, from])) {
                    return true;
                }
                visited[i] = 0; // 경로 실패
            }
        }
        
        return false;   // 경로 없을 때만 여기 도달
    }
    
    dfs('ICN', []);
    
    return answer;
}

// 백트래킹 적용 X - tickets = [["ICN", "BBB"], ["BBB", "ICN"], ["ICN", "AAA"]]; 일 때 오류 발생
/*
function solution(tickets) {
    const answer = [];
    const visited = [];
    
    tickets = tickets.sort();
    
    const dfs = (from, tickets) => {
        answer.push(from);
        
        if (tickets.length > 0) {
            let toIdx = tickets.findIndex(elem => elem[0] === from);
            let to = tickets[toIdx][1];
            tickets.splice(toIdx, 1);
            dfs(to, tickets);
        }
    }
    
    dfs('ICN', tickets);
    return answer;
}
*/