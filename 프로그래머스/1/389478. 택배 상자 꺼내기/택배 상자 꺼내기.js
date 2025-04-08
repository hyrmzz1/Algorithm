/**
* @param {number} n - 창고에 쌓인 전체 상자 수
* @param {number} w - 가로로 한 줄에 쌓이는 상자 수
* @param {number} num - 꺼내려는 상자의 번호
* @returns {number} - 꺼내야 하는 상자의 총 개수
*/
function solution(n, w, num) {
    let answer = 0;
    
    const storage = new Array();
    const height = Math.ceil(n / w);
    
    let targetX = 0;
    let targetY = 0;
    let boxNum = 1;
    let leftToRight = true;
    
    for (let i = 0; i < height; i++) {
        const col = [];
        
        for (let j = 0; j < w; j++) {
            if (boxNum === num) {
                targetX = i;
                targetY = leftToRight ? j : w - 1 - j;
            }
            
            boxNum > n ? col.push(0) : col.push(boxNum);
            boxNum++;
        }
        
        if (!leftToRight){
            col.reverse();
        }
        
        storage.push(col);
        leftToRight = !leftToRight;
    }
    
    for (let i = targetX; i < storage.length; i++) {
        if(storage[i][targetY] !== 0) answer++;
    }
    
    return answer;
}