// 파라매트릭 서치(Parametric search): 최적화 문제(문제의 상황을 만족하는 특정 변수의 최솟값, 최댓값을 구하는 문제)를 결정 문제로 바꾸어 푸는 것
// 디딤돌의 최대 칸수 k가 매개변수로 주어질 때, 최대 몇 명까지 징검다리를 건널 수 있는가 => n명은 최대 칸 수 k일 때 건널 수 있는가
// 이진 탐색 이용. 탐색 기준은 n명
// 이 문제에 이진 탐색을 활용하는 이유는? stones 배열 각 원소의 최대값은 200,000,000, 니니즈 친구들의 수는 무제한이므로 완탐 활용시 시간 초과 가능성이 크기 때문.

function solution(stones, k) {
    // 스프레드 연산자 사용시 효율성 검사 통과 못함
    // let min = Math.min(...stones);
    // let max = Math.max(...stones);
    
    let min = 1;
    let max = 200000000;    // 최대로 밟을 수 있는 수이므로, 지나갈 수 있는 사람의 최대값
    
    // 아래 for문 없어도 효율성 검사 통과함
    // for (let stone of stones) {
    //     min = Math.min(min, stone);
    //     max = Math.max(max, stone);
    // }
    
    // n명이 징검다리를 건널 수 있는가
    const isPossible = (n) => {
        let cnt = 0;    // 연속으로 놓여진 숫자가 0인 디딤돌의 개수
        
        for (let stone of stones) {
            // n명이 건널 수 없는 디딤돌 연속으로 안나오면 cnt 초기화
            stone - n <= 0 ? cnt++ : cnt = 0;
            
            if (cnt === k) return false;   // 건널 수 없음
        }
        
        return true;    // n명은 징검다리를 건널 수 있음
    }
    
    while (min < max) {
        let mid = Math.floor((min + max) / 2)
        
        isPossible(mid) ? min = mid + 1 : max = mid;
    }

    return max;
}