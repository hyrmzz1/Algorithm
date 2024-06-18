function solution(want, number, discount) {
    let answer = 0;
    
    for (let i = 0; i < discount.length; i++) {
        const list = discount.slice(i, i + 10);
        let flag = true;
        
        want.forEach((w, idx) => { 
            // 원하는 만큼 할인구매 X
            if (list.filter(elem => elem === w).length < number[idx]) flag = false;
        })
        
        if (flag) answer++; // 원하는 만큼 할인구매 가능한 날
    }
    
    return answer;
}