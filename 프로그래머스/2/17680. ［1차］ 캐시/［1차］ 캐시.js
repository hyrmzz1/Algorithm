function solution(cacheSize, cities) {
    let answer = 0;
    const queue = new Array(cacheSize); // 선입선출
    
    if (cacheSize === 0) return cities.length * 5;
    cities = cities.map(city => city.toLowerCase());
    
    cities.forEach(city => {
        const idx = queue.indexOf(city);
        if (idx === -1) {
            // cache miss
            answer += 5;
            queue.shift();
            queue.push(city.toLowerCase());
        } else {
            // cache hit
            answer += 1;
            queue.splice(idx, 1);
            queue.push(city);
        }
    })
    
    return answer;
}