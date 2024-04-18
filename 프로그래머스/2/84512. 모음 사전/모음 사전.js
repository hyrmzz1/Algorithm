function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const dict = [];
    
    function dfs(level, newWord){
        dict.push(newWord);
        if (level === vowels.length) return;
        
        for (let i = 0; i < vowels.length; i++) {
            dfs(level + 1, newWord + vowels[i]);
        }
    }
    
    dfs(0, '');
    return dict.indexOf(word);
}