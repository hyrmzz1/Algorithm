function solution(array, commands) {
    const answer = [];
    
    for (let a = 0; a < commands.length; a++) {
        let i = commands[a][0];
        let j = commands[a][1];
        let k = commands[a][2];
        
        let new_array = array.slice(i-1, j);
        new_array.sort((a,b)=>a-b);
        answer.push(new_array[k-1]);
    }
    return answer;
}