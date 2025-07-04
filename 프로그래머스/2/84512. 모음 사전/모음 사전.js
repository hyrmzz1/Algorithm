function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    const dict = new Map();
    let index = 0;
    
    const dfs = (curWord, depth) => {
        dict.set(curWord, index++);
        
        if (depth === 5) return;
        
        for (const vowel of vowels) {
            dfs(curWord + vowel, depth + 1);
        }
    }
    
    dfs('', 0);
    
    return dict.get(word);
}