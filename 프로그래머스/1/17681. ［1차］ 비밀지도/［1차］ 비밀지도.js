function solution(n, arr1, arr2) {
    const answer = [];
    
    // 1. n x n 배열로 변환
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].toString(2).padStart(n, "0");
        arr2[i] = arr2[i].toString(2).padStart(n, "0");
    }
    
    // 2. 두 배열 겹치는 부분 계산
    for (let i = 0; i < arr1.length; i++) {
        let r = "";
        for (let j = 0; j < arr1[0].length; j++) {
            if (arr1[i][j] === "0" && arr2[i][j] === "0") {
                r += " ";
            } else {
                r += "#";
            }
        }
        answer.push(r);
    }
    
    return answer;
}