function solution(answers) {
    const one = {
        name: 1,
        type: [1, 2, 3, 4, 5],
        ans: 0
    };
    
    const two = {
        name: 2,
        type: [2, 1, 2, 3, 2, 4, 2, 5],
        ans: 0
    };
    
    const three = {
        name: 3,
        type: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
        ans: 0
    };
    
    for (let i = 0; i < answers.length; i++) {
        [one, two, three].forEach(obj => {
            if (obj.type[i % obj.type.length] === answers[i]) obj.ans += 1;
        });
    }
    
    let maxAns = Math.max(one.ans, two.ans, three.ans);
    let maxPerson = [];
    [one, two, three].forEach(obj => {
        if (obj.ans === maxAns) maxPerson.push(obj.name);
    });
    
    return maxPerson;
}