// 투포인터 이용
function solution(sequence, k) {
    const answer = [];
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let seqLen = sequence.length;   // 길이 짧은 수열 찾기 위함
    
    while (right < sequence.length) {
        if (sum < k) {
            sum += sequence[++right]
        } else if (sum > k) {
            sum -= sequence[left++];
        } else {
            if (seqLen > right - left) {
                answer.pop();
                answer.push([left, right]);
                seqLen = right - left;
            }
            sum -= sequence[left++];
        }
    }
    
    return answer[0];
}

// 시간 초과
/*
function solution(sequence, k) {
    const answer = [];  // [시작 인덱스, 마지막 인덱스, 길이]
    
    // 1. sequence 앞 요소부터 연속으로 합
    // 2. 합한 값이 k일 경우 [시작 인덱스, 마지막 인덱스] answer에 담기
    for (let i = 0; i < sequence.length; i++) {
        let sum = sequence[i];
        
        if (sum === k) {
            answer.push([i, i, 0]);
            continue;
        }
        
        for (let j = i + 1; j < sequence.length; j++) {
            sum += sequence[j];
            
            if (sum === k) {
                answer.push([i, j, j - i]);
                break;
            } else if (sum > k) break;
        }
    }
    
    // 3. length 가장 짧은 answer 요소 반환
    answer.sort((a, b) => a[2] - b[2]);    
    return answer[0].slice(0, 2);   // 길이 제외한 배열 출력
}
*/