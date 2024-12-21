function solution(str1, str2) {
    let arr1 = [];    // str1 다중집합
    let arr2 = [];    // str2 다중집합
    
    // 1. 문자열 두 글자씩 끊기, 모두 소문자로 처리
    for (let i = 0; i < str1.length - 1; i++) {
        arr1.push(str1[i] + str1[i + 1])
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        arr2.push(str2[i] + str2[i + 1])
    }
    
    // 2. 해당 원소에 영문자가 아닌 게 있을 경우 원소 제거
    arr1 = arr1.filter(elem => /^[a-zA-Z]*$/.test(elem)).map(elem => elem.toLowerCase());
    arr2 = arr2.filter(elem => /^[a-zA-Z]*$/.test(elem)).map(elem => elem.toLowerCase());
    
    // 3. 공집합 처리
    if (arr1.length === 0 && arr2.length === 0) return 65536;   // 유사도는 1
    
    // 4. 자카드 유사도 계산
    let answer = 65536;
    let union = arr1.length + arr2.length;  // 여기에 교집합 개수 빼야 함
    let inter = arr2.length;    // 여기에 차집합 개수 빼야 함
    
    // 4-1. 교집합 개수 구하기
    for (const elem of arr1) {
        let idx = arr2.indexOf(elem);
        if (idx === -1) continue;
        arr2.splice(idx, 1);
    }
    
    inter -= arr2.length;
    union -= inter;
    
    return Math.floor(answer * (inter / union));
}