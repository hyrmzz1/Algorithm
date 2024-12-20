function solution(s) {
    const strToNum = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
    ]);
    
    for (const [key, value] of strToNum.entries()) {
        s = s.replaceAll(value, key)
        if(!isNaN(Number(s))) break;
    }
    
    return Number(s);
}