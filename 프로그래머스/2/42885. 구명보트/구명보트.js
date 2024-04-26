function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let cnt = 0;
    let l = 0;
    let r = people.length - 1;
    
    while (l <= r) {
        if (people[l] + people[r] <= limit) l++;
        
        r--;
        cnt++;
    }
    
    return cnt;
}