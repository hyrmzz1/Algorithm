function solution(want, number, discount) {
    var answer = 0;
    
    for (let i = 0; i < discount.length; i++) {
        const list = discount.slice(i, i + 10);
        let listCnt = [];
        
        want.forEach(w => {
            listCnt.push(list.filter(elem => elem === w).length);
        })
        
        // listCnt와 number 비교
        for (let j = 0; j < number.length; j++) {
            if (listCnt[j] < number[j]) break;
            if (j === number.length - 1) answer++;
        }
    }
    
    return answer;
}