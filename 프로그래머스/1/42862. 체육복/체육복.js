function solution(n, lost, reserve) {
    const arr = new Array(n+1).fill(1);   // 학생당 체육복 개수. index === 학생 번호
    arr[0] = 0;
    
    lost.forEach(n => { arr[n] -= 1; }) // 잃어버렸다면 체육복 -1
    reserve.forEach(n => { arr[n] += 1; })  // 여분 있다면 체육복 +1
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (arr[i-1] > 1) {
                arr[i] += 1;
                arr[i-1] -= 1;
            } else if (arr[i+1] > 1) {
                arr[i] += 1;
                arr[i+1] -= 1;
            }
        }
    }
    
    let cnt = 0;
    arr.forEach(elem => {
        if (elem > 0) cnt++;
    })
    
    return cnt;
}