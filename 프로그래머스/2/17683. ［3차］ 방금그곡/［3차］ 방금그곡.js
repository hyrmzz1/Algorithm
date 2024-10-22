const replaceSharp = (sound) => {
    return sound.replaceAll('C#','c')
                .replaceAll('D#','d')
                .replaceAll('E#','e')
                .replaceAll('F#','f')
                .replaceAll('G#','g')
                .replaceAll('A#','a')
                .replaceAll('B#','b');
}

function solution(m, musicinfos) {
    let answer = '(None)';
    let maxLen = 0;
    m = replaceSharp(m);    // #을 포함하는 음 변환
    
    musicinfos.forEach(info => {
        let [start, end, title, sound] = info.split(',');
        
        sound = replaceSharp(sound);    // #을 포함하는 음 변환
        
        // 재생된 시간 (.map(Number) 없을 경우 통과 못하는 tc 있음)
		const [startHour, startMin] = start.split(":").map(Number);
		const [endHour, endMin] = end.split(":").map(Number);
		const time = endHour * 60 + endMin - (startHour * 60 + startMin);
        
        sound = sound.repeat(Math.floor(time / sound.length)) + sound.slice(0, time % sound.length);  // 재생된 멜로디
        
        if (sound.includes(m)) {
            if (time > maxLen) {
                answer = title;
                maxLen = time;
            }
        }
    })

    return answer;
}