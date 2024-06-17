function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    if (a < 10) a = '0' + a;
    if (b < 10) b = '0' + b;
    const date = new Date(`2016-${a}-${b}`).getDay();
    
    return week[date];
}