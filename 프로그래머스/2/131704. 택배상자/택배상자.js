function solution(order) {
    let answer = 0; // 영재가 실을 수 있는 상자의 수
    const container = new Array(order.length).fill(0).map((_, idx) => idx + 1); // FIFO
    const tempContainer = [];   // LIFO
    let i = 0;  // order 배열에서 상자를 실을 순서의 인덱스

    for (let box of container) {
        if (box === order[i]) {
            // 만약 현재 상자가 트럭에 실어야 하는 순서와 같다면 바로 실음
            answer++;
            i++;
        } else {
            // 그렇지 않다면 임시 보관 컨테이너에 넣음
            tempContainer.push(box);
        }

        // tempContainer의 맨 마지막 상자가 실어야 하는 순서라면 계속해서 꺼냄
        while (tempContainer.length > 0 && tempContainer[tempContainer.length - 1] === order[i]) {
            tempContainer.pop();
            answer++;
            i++;
        }
    }
    
    return answer;
}