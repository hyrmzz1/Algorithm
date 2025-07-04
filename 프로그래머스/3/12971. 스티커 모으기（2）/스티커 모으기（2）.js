function solution(sticker) {
    const len = sticker.length;
    const dp1 = new Array(sticker.length).fill(0);  // 첫번째 스티커 뗀 경우
    const dp2 = new Array(sticker.length).fill(0);  // 첫번째 스티커 떼지 않은 경우
    
    // 초기값 세팅
    dp1[0] = sticker[0];
    dp1[1] = sticker[0];
    dp2[1] = sticker[1];
    
    // 예외 처리
    if (len === 1) {
        return sticker[0];
    } else if (len === 2) {
        return Math.max(sticker[0], sticker[1]);
    }
    
    for (let i = 2; i < len; i++) {
        dp1[i] = Math.max(sticker[i] + dp1[i - 2], dp1[i - 1]);
        dp2[i] = Math.max(sticker[i] + dp2[i - 2], dp2[i - 1]);
        
        if (i === len - 1) dp1[i] = dp1[i - 1];
    }
    
    return Math.max(dp1[len - 1], dp2[len - 1]);
}