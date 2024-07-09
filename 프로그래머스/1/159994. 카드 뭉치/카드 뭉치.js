//코딩 테스트 합격자 되기 - 자바스크립트 편
function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    
    while (goal.length > 0) {
        let tmp = goal.shift();
        
        if (tmp === cards1[0]) cards1.shift();
        else if (tmp === cards2[0]) cards2.shift();
        else {
            answer = 'No';
            break;
        }
    }
    
    return answer;
}