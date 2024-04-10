function solution(fees, records) {
    const answer = {};  // {차량번호: [in, out]}
    const carId = [];
    
    records.forEach(record => {
        const [time, id, inout] = record.split(' ');
        carId.push(id);
        
        if (!answer[id]) answer[id] = [];

        answer[id].push(time);    // in, out, in, out
    });
    
    // OUT 없다면 23:59 추가하고 주차 요금 계산
    const carNum = [...new Set(carId)].sort((a, b) => a - b);
    const fee = []; // carNum과 같은 인덱스 -> 같은 차에 대한 값
    
    carNum.forEach(num => {
        if (answer[num].length % 2 === 1) answer[num].push("23:59");

        // 누적시간 계산
        let accTime = 0;
        for (let i = 0; i < answer[num].length; i += 2) {
            let timeIn = answer[num][i];
            let timeOut = answer[num][i + 1];  

            let [hoursIn, minutesIn] = timeIn.split(':').map(Number);
            let [hoursOut, minutesOut] = timeOut.split(':').map(Number);
            let minutesDiff = hoursOut * 60 + minutesOut - (hoursIn * 60 + minutesIn);
            accTime += minutesDiff;
        }
        
        // 주차 요금
        accTime <= fees[0] ? fee.push(fees[1]) : fee.push(fees[1] + Math.ceil((accTime - fees[0]) / fees[2]) * fees[3]);
    })
    
    return fee;
}