function solution(today, terms, privacies) {
    let today_date = new Date(today)
    const terms_detail = {};    // dictionary 생성
    
    terms.forEach((term) => {
        const [key, value] = term.split(' ');   // 구조 분해 할당
        terms_detail[key] = Number(value);
    })
    
    let answer = [];    // i+1 담기
    privacies.forEach((privacy, i) => {
        const [date, type] = privacy.split(' ');
        
        const privacies_date = new Date(date);
        
        // privacies_date에 유효기간 더하고 today_date와 비교
        privacies_date.setMonth(privacies_date.getMonth() + terms_detail[type]);
        
        if (privacies_date <= today_date) answer.push(i + 1);
    })
    
    return answer;
}