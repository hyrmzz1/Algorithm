/**
* players: 0시에서 23시까지의 시간대별 게임 이용자의 수
* m: 서버 한 대로 감당할 수 있는 최대 이용자의 수
* k:서버 한 대가 운영 가능한 시간
*/
function solution(players, m, k) {
    const runningServers = new Array(players.length).fill(0);
    
    let left = 0, right = 0;   // 포인터
    while (right < players.length) {
        right++;
        if (right - left > k) left++;
        
        const need = Math.floor(players[right - 1] / m);
        const nowRunningServers = runningServers.slice(left, right).reduce((acc, cur) => acc + cur);
        
        if (need > nowRunningServers) {
            runningServers[right - 1] = need - nowRunningServers;
        }
    }
    
    return runningServers.reduce((acc, cur) => acc + cur);
}