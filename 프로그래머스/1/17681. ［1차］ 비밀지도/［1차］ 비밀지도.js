function solution(n, arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        const map1 = arr1[i].toString(2).padStart(n, "0");
        const map2 = arr2[i].toString(2).padStart(n, "0");
        
        let side = '';
        for (let j = 0; j < n; j++) {
            map1[j] === '0' && map2[j] === '0' ? side += ' ' : side += '#';
        }
        
        answer.push(side);
    }
    
    return answer;
}