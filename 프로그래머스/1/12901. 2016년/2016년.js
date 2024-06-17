function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    const date = new Date(2016, a - 1, b).getDay();
    
    return week[date];
}