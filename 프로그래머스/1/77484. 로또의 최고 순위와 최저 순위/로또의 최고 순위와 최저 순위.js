function solution(lottos, win_nums) {
    let rank = [6, 6, 5, 4, 3, 2, 1]    // 등수: rank[cnt]
    
    // filter()는 조건에 만족하는 요소만으로 이루어진 새로운 배열을 반환함.
    const cnt = lottos.filter(num => win_nums.includes(num)).length;
    const zero = lottos.filter(num => num === 0).length;
    
    return [rank[cnt + zero], rank[cnt]];
}