function solution(weights) {
    let answer = 0;
    
    const weightMap = new Map();
    const ratios = [1, 1/2, 2/3, 3/4];
    
    weights.sort((a, b) => a - b).forEach((weight) => {
        ratios.forEach((ratio) => {
            const peerWeight = weight * ratio;
            
            if (weightMap.has(peerWeight)) {
                answer += weightMap.get(peerWeight);
            }
        })
        
        weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
    })
    
    return answer;
}