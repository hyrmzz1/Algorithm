function solution(n) {
    let ans = 0;
    
    while (n > 0) {
        if (n % 2) ans++;
        
        n = Math.floor(n / 2);
    }

    return ans;
}