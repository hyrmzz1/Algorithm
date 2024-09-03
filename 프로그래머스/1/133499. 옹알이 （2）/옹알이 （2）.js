function solution(babbling) {
    let answer = 0;
    const canSpeak = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(babble => {
        let word = [...babble];
        let now = '';
        let prev = '';
        
        while (word.length) {
            now += word.shift();
            
            if (canSpeak.includes(now) && now !== prev) {
                prev = now;
                now = '';
            }
        }
        
        if (now === '') answer++;
    })
    
    return answer;
}