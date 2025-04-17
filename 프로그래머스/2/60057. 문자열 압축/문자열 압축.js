function solution(s) {
    let minLen = Infinity;
    
    if (s.length === 1) return 1;
    
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let compressed = '';
        
        let prev = s.slice(0, i);
        let cnt = 1;
        
        for (let j = i; j < s.length; j += i) {
            let curr = s.slice(j, j + i);
            
            if (prev === curr) {
                cnt++;
            } else {
                compressed += cnt > 1 ? cnt + prev : prev;
                prev = curr;
                cnt = 1;
            }
        }
        
        compressed += cnt > 1 ? cnt + prev : prev;
        minLen = Math.min(minLen, compressed.length);
    }
    
    return minLen;
}