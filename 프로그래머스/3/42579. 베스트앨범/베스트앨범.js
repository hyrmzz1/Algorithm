function solution(genres, plays) {
    const answer = [];
    
    let songs = genres.map((genre, idx) => {
        return {
            idx: idx,
            genre: genre,
            play: plays[idx],
        };
    })
    
    // 장르별 재생 횟수
    let playByGenre = songs.reduce((acc, song) => {
        if (!acc[song.genre]) { // 초기값 설정
            acc[song.genre] = 0;
        }
        
        acc[song.genre] += song.play;
        
        return acc;
    }, {});
    
    // 총 재생횟수 높은 순으로 장르 정렬
    playByGenre = Object.entries(playByGenre).sort((a, b) => b[1] - a[1]); 
    
    // 재생횟수 높은 순으로 모든 노래 정렬
    songs.sort((a, b) => b.play - a.play);
    
    playByGenre.forEach((genre) => {
        let limit = 0;
        
        songs.forEach((song) => {
            if (song.genre === genre[0] && limit < 2) {
                answer.push(song.idx);
                limit++;
            }
        })
    })
    
    return answer;
}