function solution(s) {
    let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];    // index: 0~9. 총 10개
    
    for(let i = 0; i < words.length; i++){
        s = s.split(words[i]);
        s = s.join(i)
    }
    
    return Number(s);
}