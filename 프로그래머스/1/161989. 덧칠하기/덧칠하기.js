function solution(n, m, section) {
    let range = 0;
    let cnt = 0;
    
    section.forEach(elem => {
        if (elem > range) {
            cnt++;
            range = elem + m - 1;
        }
    })
    
    return cnt;
}