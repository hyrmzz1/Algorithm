function solution(files) {
    const answer = files.map((file) => {
        const numIdx = file.search(/\d/gi);
        
        // HEAD, NUMBER, TAIL 파싱
        const head = file.slice(0, numIdx);
        const body = file.slice(numIdx);    // NUMBER + TAIL
        const num = body.match(/^\d{1,5}/)[0];
        const tail = body.slice(num.length);
        
        return [head, num, tail];
    })
    
    // 대소문자 구분 없이 head 사전순 정렬
    answer.sort((a, b) => {
        const upperA = a[0].toUpperCase();
        const upperB = b[0].toUpperCase();
        
        if (upperA < upperB) return -1;
        else if (upperA > upperB) return 1;
        else {  // number 오름차순 정렬
            const intA = Number(a[1]);
            const intB = Number(b[1]);
            
            if (intA < intB) return -1;
            else if (intA > intB) return 1;
            else return 0;
        }
    })
    
    return answer.map(ans => ans.join(''));
}