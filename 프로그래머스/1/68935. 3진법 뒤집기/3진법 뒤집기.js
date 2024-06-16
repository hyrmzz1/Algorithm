function solution(n) {
    let threeN = n.toString(3); // 10진법 -> 3진법
    
    threeN = threeN.split('').reverse().join('');   // 3진법 앞뒤로 뒤집기
    
    return parseInt(threeN, 3)  // 3진법 -> 10진법
}