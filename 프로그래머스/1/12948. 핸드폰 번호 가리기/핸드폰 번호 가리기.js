function solution(phoneNumber) {
    const answer = '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(-4);
    
    return answer;
}