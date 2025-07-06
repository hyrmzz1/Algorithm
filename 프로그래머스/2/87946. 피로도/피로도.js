// 완전 탐색 (모든 경우의 수를 생성하고 각각을 확인)

// arr에 대한 순열 구하는 함수
const getPermutations = (arr) => {
    if (arr.length === 1) return arr;
    
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));

        const permutations = getPermutations(remaining);

        for (let perm of permutations) {
            result.push([current].concat(perm));
        }
    }

    return result;
}

function solution(k, dungeons) {
    let answer = 0; // 탐색 가능한 최대 던전 수
    const dungeonIdx = Array.from({ length: dungeons.length }, (_, idx) => idx);
    
    // 1. 던전 탐색 순서 순열 구하기
    const permutations = getPermutations(dungeonIdx);
    
    // 2. 각각의 순열에서 최대 던전 수 구하기
    permutations.forEach(perm => {
        let piro = k;
        let count = 0;  // 해당 순열에서 탐색 가능한 던전 수
        
        perm.forEach(dungeonIdx => {
            const [need, somo] = dungeons[dungeonIdx];
            
            if (piro >= need) {
                piro -= somo;
                count++;
            }
        })
        
        answer = Math.max(answer, count);
    })
    
    return answer;
}