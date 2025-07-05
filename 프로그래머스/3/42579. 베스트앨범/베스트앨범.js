// 1. 장르별 총 재생 횟수 계산
// 2. 장르를 총 재생 횟수 순으로 정렬
// 3. 각 장르 내에서 노래들을 재생 횟수 순으로 정렬 (재생 횟수가 같으면 고유 번호 순)
// 4. 각 장르에서 최대 2개씩 선택
function solution(genres, plays) {
    // 장르명과 총 재생 횟수를 저장할 해시맵
    const genreMap = {};
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if (!genreMap[genre]) {
            genreMap[genre] = {
                totalPlays: 0,
                songs: [],
            }
        }
        
        genreMap[genre].totalPlays += play;
        genreMap[genre].songs.push(i);
    }
    
    // 2. 장르를 총 재생 횟수 순으로 정렬
    const sortedGenres = Object.keys(genreMap).sort((a, b) => genreMap[b].totalPlays - genreMap[a].totalPlays);
    
    const result = [];
    
    // 각 장르 내에서 노래 정렬
    for (let genre of sortedGenres) {
        // 1) 재생 횟수 순 정렬, 2) 고유 번호 순 정렬
        const sortedSongs = genreMap[genre].songs.sort((a, b) => {
            return plays[a] === plays[b] ? a - b : plays[b] - plays[a];
        })
        
        result.push(...sortedSongs.slice(0, 2));
    }
    
    return result;
}