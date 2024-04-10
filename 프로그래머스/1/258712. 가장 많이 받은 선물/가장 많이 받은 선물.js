function solution(friends, gifts) {
    const giftTable = {};   // 주고받은 선물 기록하기 위한 객체
    const nextMonth = new Array(friends.length).fill(0);    // 다음 달에 받은 선물 개수
    const giftCnt = new Map(); // 선물 지수
    
    friends.forEach(from => {
        giftTable[from] = {};
        friends.forEach(to => {
            if (from === to) return false;
            giftTable[from][to] = 0;
        })
        
        giftCnt.set(from, 0)
    })
    
    // 주고받은 선물 개수 기록
    gifts.forEach(gift => {
        const [from, to] = gift.split(' ');
        giftTable[from][to] += 1;
        
        // 선물 지수 계산
        giftCnt.set(from, giftCnt.get(from) + 1);   // 준 개수 더하기
        giftCnt.set(to, giftCnt.get(to) - 1);   // 받은 개수 빼기
    })
    
    for (let i = 0; i < friends.length - 1; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            if (giftTable[friends[i]][friends[j]] > giftTable[friends[j]][friends[i]]) {
                nextMonth[i]++;
            } else if (giftTable[friends[i]][friends[j]] < giftTable[friends[j]][friends[i]]) {
                nextMonth[j]++;
            } else {    // 같을 때
                // 선물 지수 비교
                if (giftCnt.get(friends[i]) > giftCnt.get(friends[j])) {
                    nextMonth[i]++;
                } else if (giftCnt.get(friends[i]) < giftCnt.get(friends[j])) {
                    nextMonth[j]++;
                }
            }
        }
    }
    
    return Math.max(...nextMonth);
}