// 1. 사전 배열 만들기
// 2. 사전 배열에서 word의 인덱스 구하기
function solution(word) {
    const dict = [];
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    const dfs = (curWord, depth) => {
        dict.push(curWord);
        
        if (depth === 5) return;
        
        for (const vowel of vowels) {
            dfs(curWord+vowel, depth + 1);
        }
    }
    
    dfs('', 0);
    
    return dict.indexOf(word);
}