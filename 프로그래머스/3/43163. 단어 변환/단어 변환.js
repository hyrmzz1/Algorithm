function solution(begin, target, words) {
    let ans = 0;
    const visited = [];
    const queue = [[begin, ans]];
    
    if (!words.includes(target)) return 0;
    
    while (queue.length > 0) {
        let [preWord, cnt] = queue.shift();
        
        if (preWord === target) return cnt;
        
        // 한 글자만 다른 단어 찾기
        words.forEach(word => {
            let diff = 0;

            for (let i = 0; i < word.length; i++) {
                if (word[i] !== preWord[i]) diff++;
            }

            if (diff === 1 && !visited.includes(word)) {
                queue.push([word, ++cnt]);
                visited.push(word);
            }
        })
    }
}