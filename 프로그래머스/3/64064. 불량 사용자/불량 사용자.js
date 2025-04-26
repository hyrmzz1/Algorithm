function solution(userId, bannedId) {
    // 1. 각 bannedId에 해당하는 아이디 배열 구하기
    const bannedUserGroup = [];
    
    for (const bId of bannedId) {
        const regex = new RegExp('^' + bId.replaceAll('*', '.') + '$');
        bannedUserGroup.push(userId.filter(uId => regex.test(uId)));
    }
    
    // 2. 1에서 구한 배열들간의 조합 개수 구하기 - 백트래킹
    const answer = new Set();
    const usedId = new Set();
    
    const backtrack = (path, idx) => {
        if (idx === bannedId.length) {
            answer.add([...path].sort().toString());
            return;
        }
        
        for (const uId of bannedUserGroup[idx]) {
            if (usedId.has(uId)) continue;
            
            path.push(uId);
            usedId.add(uId);
            
            backtrack(path, idx + 1);
            
            path.pop();
            usedId.delete(uId);
        }
    }
    
    backtrack([], 0);
    
    return answer.size;
}