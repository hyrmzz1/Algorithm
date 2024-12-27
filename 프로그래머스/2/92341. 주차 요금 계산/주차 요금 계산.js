// 차량 별 누적 시간 계산
const accMinutes = (timeArr) => {
    let minutes = 0;    // 누적 출자 시간

    for (let i = 0; i < timeArr.length; i += 2) {
        let [inHours, inMinutes] = timeArr[i].split(":").map(Number);
        let [outHours, outMinutes] = timeArr[i + 1].split(":").map(Number);

        minutes += (outHours * 60 + outMinutes) - (inHours * 60 + inMinutes)
    }

    return minutes;
}

// 주차 요금 계산
const getFees = (accMin, fees) => {
    if (accMin <= fees[0]) {
        return fees[1];
    } else {
        return fees[1] + Math.ceil((accMin - fees[0]) / fees[2]) * fees[3];
    }
};

function solution(fees, records) {
    const answer = [];
    
    // 차량 번호
    const cars = new Map([...new Set(records.map(record => (record.split(" ")[1])).sort((a, b) => a - b))].map(car => [car, []]));
    
    // 차량별 입/출차 시간 기록
    records.forEach(record => {
        const [time, carNum, inOut] = record.split(" ");
        cars.get(carNum).push(time);
    })
    
    for (const [key, value] of cars) {
        // 출차 내역 없는 경우
        if (value.length % 2 !== 0) {
            value.push("23:59");
        }
        
        const accMin = accMinutes(value); // 누적 시간 계산
        answer.push(getFees(accMin, fees)); // 요금 계산
    }
    
    return answer;
}