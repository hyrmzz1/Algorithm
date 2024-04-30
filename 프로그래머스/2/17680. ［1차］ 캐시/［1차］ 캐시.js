function solution(cacheSize, cities) {
    let cache = [];
    let runTime = 0;
    
    // 예외처리
    if (cacheSize === 0) return cities.length * 5;
    
    cities.forEach(city => {
        const cityName = city.toLowerCase();   // 대소문자 구분하지 않기 위함
        
        if (cache.includes(cityName)) { // cache hit
            cache = cache.filter(x => x !== cityName);  // 도시 빼고
            cache.push(cityName);   // 제일 뒤로 넣기
            runTime += 1;
        } else {    // cache miss
            if (cache.length === cacheSize) cache.shift();
            cache.push(cityName);
            runTime += 5;
        }
    })
    
    return runTime;
}