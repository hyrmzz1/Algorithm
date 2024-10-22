// const replaceSharp = (sound) => {
//     return sound.replaceAll('C#','c')
//                 .replaceAll('D#','d')
//                 .replaceAll('E#','e')
//                 .replaceAll('F#','f')
//                 .replaceAll('G#','g')
//                 .replaceAll('A#','a')
//                 .replaceAll('B#','b');
// }

// function solution(m, musicinfos) {
//     let answer = '(None)';
//     let maxLen = 0;
//     m = replaceSharp(m);    // #을 포함하는 음 변환
    
//     musicinfos.forEach(info => {
//         let [start, end, title, sound] = info.split(',');
        
//         sound = replaceSharp(sound);    // #을 포함하는 음 변환
        
//         // 재생된 시간
//         const startTime = start.split(':')[0] * 60 + start.split(':')[1];
//         const endTime = end.split(':')[0] * 60 + end.split(':')[1];
//         const time = endTime - startTime;   // 재생된 멜로디 길이
        
//         let fullSound = sound.repeat(Math.floor(time / sound.length)) + sound.slice(0, time % sound.length);  // 재생된 멜로디
        
//         if (fullSound.includes(m)) {
//             if (time > maxLen) {
//                 answer = title;
//                 maxLen = time;
//             }
//         }
//     })

function solution(m, musicinfos) {
	// '#'이 붙은 음을 소문자로 변환하는 함수
	const convertSharp = (melody) => melody.replace(/(\w)#/g, (_, p) => p.toLowerCase());
 
	// 멜로디를 변환
	m = convertSharp(m);
 
	// 결과를 저장할 변수 초기화
	let result = { title: "(None)", playTime: 0 };
 
	musicinfos.forEach((info) => {
		// 음악 정보를 분해
		let [start, end, title, melody] = info.split(",");
 
		// 재생 시간 계산
		const [startHour, startMin] = start.split(":").map(Number);
		const [endHour, endMin] = end.split(":").map(Number);
		const playTime = endHour * 60 + endMin - (startHour * 60 + startMin);
 
		// 멜로디를 변환
		melody = convertSharp(melody);
 
		// 실제 재생된 멜로디 생성
		let playedMelody = melody.repeat(Math.floor(playTime / melody.length)) + melody.slice(0, playTime % melody.length);
 
		// 기억한 멜로디가 재생된 멜로디에 포함되는지 확인
		if (playedMelody.includes(m)) {
			// 조건에 맞는 경우 결과 업데이트
			if (playTime > result.playTime) {
				result = { title, playTime };
			}
		}
	});
 
	return result.title;
}
    
//     return answer;
// }