function solution(strings, n) {
    // 코딩 테스트 합격자 되기 - 자바스크립트 편
    strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    
    return strings;
}