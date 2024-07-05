function solution(strings, n) {
    // 코딩 테스트 합격자 되기 - 자바스크립트 편
    strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        }
    });
    
    return strings;
}