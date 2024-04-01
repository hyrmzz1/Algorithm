function solution(nums) {
    let answer = nums.length / 2; // 선택 가능한 종류의 최대 개수
    let hashMap = new Map();    // 해시 테이블
    
    nums.forEach((num, idx) => {
        hashMap.set(num, idx);
    })
    
    return answer <= hashMap.size ? answer : hashMap.size;
}