function solution(phoneNumber) {
    const len = phoneNumber.length; // 표시할 숫자 개수
    const hideLen = len - 4;
    
    return '*'.repeat(hideLen) + phoneNumber.slice(len - 4);
}