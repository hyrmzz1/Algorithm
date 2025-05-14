function solution(word) {
    const dict = [];
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    // 사전 만들기
    const dfs = (newWord, length) => {
        dict.push(newWord);
        if (length === 5) return;
        
        for (const vowel of vowels) {
            dfs(newWord + vowel, length + 1)
        }
    }
    
    dfs('', 0);
    
    // word가 사전에서 몇 번째 단어인지 return
    return dict.indexOf(word);
}