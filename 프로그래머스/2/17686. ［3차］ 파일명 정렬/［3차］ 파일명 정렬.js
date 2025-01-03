function solution(files) {
    const regex = /^([^\d]+)(\d{0,5})(.*)$/
    
    const answer = files.map((file, idx) => {
        let [, head, number, tail] = file.match(regex)
        return { original: file, head: head.toLowerCase(), number: parseInt(number, 10) };
    })
    
    answer.sort((a, b) => {
        return a.head.localeCompare(b.head) || a.number - b.number;
    })
    
    return answer.map(file => file.original);
}