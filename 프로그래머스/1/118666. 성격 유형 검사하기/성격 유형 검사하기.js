function solution(survey, choices) {
    let answer = '';    // 성격 유형
    const score = {};
    score['R'] = 0;
    score['T'] = 0;
    score['C'] = 0;
    score['F'] = 0;
    score['J'] = 0;
    score['M'] = 0;
    score['A'] = 0;
    score['N'] = 0;
    
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] === 1) score[survey[i][0]] += 3;
        else if (choices[i] === 2) score[survey[i][0]] += 2;
        else if (choices[i] === 3) score[survey[i][0]] += 1;
        else if (choices[i] === 5) score[survey[i][1]] += 1;
        else if (choices[i] === 6) score[survey[i][1]] += 2;
        else if (choices[i] === 7) score[survey[i][1]] += 3;
    }
    
    (score['R'] >= score['T']) ? answer += 'R' : answer += 'T';
    (score['C'] >= score['F']) ? answer += 'C' : answer += 'F';
    (score['J'] >= score['M']) ? answer += 'J' : answer += 'M';
    (score['A'] >= score['N']) ? answer += 'A' : answer += 'N';
    
    return answer;
}