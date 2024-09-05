function solution(n, stations, w) {
    let answer = 0;
    const isNotSignal = [];
    
    // 전파 미전달 아파트 체크
    for (let i = 1; i < stations.length; i++) {
        const start = stations[i-1] + w;
        const end = stations[i] - w - 1;
        
        isNotSignal.push(end - start);
    }
    
    // 맨 처음 stations 앞 전파 미전달 아파트 체크
    isNotSignal.push(stations[0] - w - 1);
    
    // 맨 마지막 stations 뒤 전파 미전달 아파트 체크
    isNotSignal.push(n - (stations[stations.length-1] + w));
    
    isNotSignal.forEach(cnt => {
        if (cnt > 0) {
            answer += Math.ceil(cnt / (w * 2 + 1));
        }
    })
    
    return answer;
}

/*
// 정확성 검사는 모두 통과하나, 시간 초과로 인해 효율성 검사 모두 실패
function isNotSignalArr(arr) {
    const isNotSignal = [];
    let temp =[];
    
    for (let elem of arr) {
        if (elem === 1) {
            if (temp.length > 0) {
                isNotSignal.push(temp);
                temp = [];
            }
        } else {
            temp.push(elem);
        }
    }
    
    if (temp.length > 0) {
        isNotSignal.push(temp);
    }
    
    return isNotSignal;
}

function solution (n, stations, w) {
    let answer = 0;
    const isSignal = new Array(n).fill(0); // 아파트별 전파 전달 여부
    
    // 초기 기지국의 전파 범위 설정
    stations.forEach(station => {
        for (let i = station - 1 - w; i <= station - 1 + w && i < isSignal.length; i++) {
            isSignal[i] = 1;
        }
    })
    
    const isNotSignal = isNotSignalArr(isSignal);
    
    isNotSignal.forEach(arr => {
        answer += Math.ceil(arr.length / (w * 2 + 1));
    })
    
    return answer;
}
*/