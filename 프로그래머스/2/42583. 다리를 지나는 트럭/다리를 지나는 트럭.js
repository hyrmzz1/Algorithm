function solution(bridgeLength, weight, truckWeights) {
    const bridge = new Array(bridgeLength).fill(0);
    let bridgeSum = 0;  // 다리 위 트럭 무게 합
    let sec = 0;
    
    while (bridge.length) {
        sec++;
        bridgeSum -= bridge.shift();
        
        if (truckWeights.length) {
            if (truckWeights[0] + bridgeSum <= weight) {
                bridgeSum += truckWeights[0];
                bridge.push(truckWeights.shift());
            } else {
                bridge.push(0);
            }
        }
    }
    
    return sec;
}