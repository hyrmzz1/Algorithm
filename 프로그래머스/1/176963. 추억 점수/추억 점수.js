function solution(name, yearning, photo) {
    const answer = new Array(photo.length).fill(0);
    
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        
        photo[i].forEach(person => {
            const idx = name.indexOf(person);
            if (idx !== -1) score += yearning[idx];
        })
        
        answer[i] = score;
    }
    
    return answer;
}