function solution(nums) {
    let answer = nums.length / 2; // 선택 가능한 종류의 최대 개수
    const hashMap = new Set([...nums])  // 해시 테이블
    
    return answer <= hashMap.size ? answer : hashMap.size;
}