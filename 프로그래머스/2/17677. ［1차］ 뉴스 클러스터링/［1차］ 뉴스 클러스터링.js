function solution(str1, str2) {
    let arr1 = [], arr2 = [];
    
    for (let i = 0; i < str1.length - 1; i++) {
        arr1.push(str1[i]+str1[i+1])
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        arr2.push(str2[i]+str2[i+1])
    }
    
    // arr 원소 다 소문자로 변환, 영문으로만 이루어진 원소로만 구성
    arr1 = arr1.map(elem => elem.toLowerCase()).filter(elem => /^[a-zA-Z]+$/.test(elem));
    arr2 = arr2.map(elem => elem.toLowerCase()).filter(elem => /^[a-zA-Z]+$/.test(elem));
    
    // 두 집합 모두 공집합일 때
    if (arr1.length === 0 && arr2.length === 0) return 65536;
    
    let union = arr1.length + arr2.length;    // 아직 교집합 안뺀 상태
    
    let inter = 0;  // 교집합 요소 개수
    arr1.forEach(elem => {
        if (arr2.includes(elem)) {
            arr2.splice(arr2.indexOf(elem), 1);
            inter++;
        }
    })
    
    union -= inter;  // 합집합 요소 개수
    
    return Math.floor((inter / union) * 65536);
}