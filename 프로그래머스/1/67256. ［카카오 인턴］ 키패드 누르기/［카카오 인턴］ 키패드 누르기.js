function solution(numbers, hand) {
    let answer = '';
    let lHand = 10;  // 왼손 위치. 초기값: *
    let rHand = 12;  // 오른손 위치. 초기값: #
    
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 3 === 1) { // 1, 4, 7
            answer += "L";
            lHand = numbers[i];  // 왼손 위치 변경
        }
        else if (numbers[i] % 3 === 0 && numbers[i] !== 0) {    // 3, 6, 9
            answer += "R";
            rHand = numbers[i];  // 오른손 위치 변경
        } 
        else {    // 2, 5, 8, 0
            if (numbers[i] === 0) numbers[i] = 11;
            
            let tmpLHand = Math.floor(Math.abs(lHand - numbers[i]) / 3) + Math.abs(lHand - numbers[i]) % 3;
            let tmpRHand = Math.floor(Math.abs(rHand - numbers[i]) / 3) + Math.abs(rHand - numbers[i]) % 3;

            if (tmpLHand === tmpRHand) {
                if (hand === "left"){
                    answer += "L";
                    lHand = numbers[i];
                } else {
                    answer += "R";
                    rHand = numbers[i];
                }
            } else if (tmpLHand < tmpRHand) {   // 왼손이 더 가까울 경우
                answer += "L";
                lHand = numbers[i];
            } else {
                answer += "R";
                rHand = numbers[i];
            }
        }
    }
    return answer;
}