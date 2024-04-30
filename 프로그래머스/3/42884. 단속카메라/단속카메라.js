function solution(routes) {
    let cnt = 0
    let out = -30001;   // 진출 지점
    
    routes.sort((a, b) => a[1] - b[1]);
    
    routes.forEach(route => {
        if (route[0] > out) {   // 진입 > 진출
            cnt++;
            out = route[1];
        }
    })
    
    return cnt;
}