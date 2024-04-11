const getPermutations= function (arr, selectNumber) {
    const results = [];
    
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택한다면 모든 배열의 원소 return

    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)] // fixed 제외한 나머지
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대한 순열
        const attached = permutations.map((permutation) => [fixed, ...permutation]); // fixed 붙이기
        results.push(...attached);
    });

    return results;
};

function solution(numbers) {
    const number = numbers.split('');
    const answer = [];
    
    for (let i = 1; i <= number.length; i++) {
        let permutations = getPermutations(number, i);
        answer.push(...permutations.map(p => p.join('')));
    }
    
    const uniqueAnswer = [...new Set(answer.map(n => Number(n)))]
    let primeCnt = 0;
    uniqueAnswer.forEach(n => {
        if (n < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) return false;
        }
        
        primeCnt++;
    })
    
    return primeCnt;
}