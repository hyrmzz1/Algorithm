function solution(N, stages) {
    const stage = Array.from({ length: N }, (_, i) => [i + 1, 0])  // [stageNum, failRate]
    
    // 실패율 계산
    stage.forEach(elem => {
        elem[1] = stages.filter(x => x === elem[0]).length / stages.length; // failRate
        stages = stages.filter(x => x !== elem[0]);
    })
    
    // 정렬
    stage.sort((a, b) => b[1] - a[1]);
    
    return stage.map(elem => elem[0]);
}