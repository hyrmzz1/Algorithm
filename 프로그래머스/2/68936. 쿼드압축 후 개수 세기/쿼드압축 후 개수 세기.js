// 분할정복. 재귀 이용
function solution(arr) {
    const answer = new Array(2).fill(0);    // [0 개수, 1 개수]
    
    const count = (x, y, l) => {
        // 길이가 1이 되면 종료
        if (l === 1) {
            answer[arr[x][y]]++;
            return;
        }
        
        // 값 모두 같은지 확인
        let flag = true;
        for (let i = x; i < x + l; i++) {
            for (let j = y; j < y + l; j++) {
                if (arr[i][j] !== arr[x][y]) {
                    flag = false;
                    break;
                }
            }
        }
        
        // 값 모두 같으면 answer[arr[x][y]]++;
        if (flag) {
            answer[arr[x][y]]++;
            return;
        }
        
        // 값 모두 같지 않다면 다시 분할
        count(x, y, l/2); // 좌상
        count(x, y + l/2, l/2); // 우상
        count(x + l/2, y, l/2); // 좌하
        count(x + l/2, y + l/2, l/2); // 우하
    }
    
    count(0, 0, arr.length);
    
    return answer;
}