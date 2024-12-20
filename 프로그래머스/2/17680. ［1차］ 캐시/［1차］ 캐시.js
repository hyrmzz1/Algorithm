function solution(cacheSize, cities) {
    let answer = 0;
    const queue = []; // 선입선출
    
    if (cacheSize === 0) return cities.length * 5;
    cities = cities.map(city => city.toLowerCase());
    
    cities.forEach(city => {
        const idx = queue.indexOf(city);
        if (idx === -1) {   // cache miss
            if (queue.length === cacheSize) queue.shift();
            queue.push(city);
            answer += 5;
        } else {    // cache hit
            queue.splice(idx, 1);
            queue.push(city);
            answer += 1;
        }
    })
    
    return answer;
}