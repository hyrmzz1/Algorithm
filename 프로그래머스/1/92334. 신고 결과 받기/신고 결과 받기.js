function solution(id_list, report, k) { // 전체 유저, 누가 누구 신고했는지, 정지 기준 횟수
    const user = id_list.map((id) => {
        return {
            id: id,
            report_id: [],  // 이 사용자가 신고한 사용자 목록
            reported_cnt: 0,    // 이 사용자가 신고당한 횟수
        }
    });
    
    // 신고한 유저 기록, 신고당한 횟수 기록
    const reports = [...new Set(report)].map(a=>{return a.split(' ')});
    
    reports.forEach(i => {
        user.find(u => u.id === i[0]).report_id.push(i[1]);
        user.find(u => u.id === i[1]).reported_cnt += 1;
    })
    
    // 정지 유저
    let stop_id = user.filter(u => u.reported_cnt >= k)
                        .map(u => u.id)
    
    user.forEach(u => {
        u.mail = 0;
        u.report_id.forEach(id => {
            if (stop_id.includes(id)) u.mail += 1;
        })
    })
    
    return user.map(u => u.mail);
}