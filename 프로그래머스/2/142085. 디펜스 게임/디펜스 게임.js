// 이분 탐색 기준: 라운드 수
function solution(n, k, enemy) {
    let answer = 0;
    let left = 0, right = enemy.length;
    
    // 0에서 round까지 진행 가능한지 판별
    const canSurvive = (round) => {
        if (round === 0 || round < k) return true;
        
        const enemies = enemy.slice(0, round).sort((a, b) => b - a);
        
        const needSoldiers = enemies.slice(k).reduce((acc, cur) => acc + cur, 0);
        return needSoldiers <= n;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        
        if (canSurvive(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}