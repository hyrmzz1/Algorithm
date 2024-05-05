function solution(s) {
    let cnt = 0;
    let zero = 0;
    
    while (true) {
        cnt++;
        
        let oldS = s.length;   // 0 제거 전 길이
        s = s.replaceAll(0, '');    // 0 제거
        zero += oldS - s.length; // 제거한 0 개수
        
        s = Number(s.length).toString(2);   // 이진 변환
        
        if (s === "1") break;
    }
    
    return [cnt, zero];
}