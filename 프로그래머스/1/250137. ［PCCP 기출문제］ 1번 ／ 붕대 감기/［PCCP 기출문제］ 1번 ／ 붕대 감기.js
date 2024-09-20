function solution(bandage, health, attacks) {
    let time = 0;
    const maxHealth = health;   // 최대(초기) 체력
    let successTime = 0;    // 연속 성공 시간
    let lastAttackTime = attacks[attacks.length-1][0];  // 마지막 공격 시간
    
    while (time < lastAttackTime && health > 0) {
        time++;
        
        // 공격 시간과 time 같은지 확인 (공격 받았는지)
        const idx = attacks.findIndex(element => element[0] === time);
        
        if (idx !== -1) {
            successTime = 0;    // 연속 성공 시간 초기화
            health -= attacks[idx][1];  // 체력 감소
        } else {
            successTime++;
            health += bandage[1];   // 체력 회복
            
            if (successTime === bandage[0]) {
            successTime = 0;
            health += bandage[2]
        }
            
            if (health > maxHealth) health = maxHealth;
        }
    }
    
    return health > 0 ? health : -1;
}