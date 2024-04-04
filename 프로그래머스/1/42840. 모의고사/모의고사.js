function solution(answers) {
    answers = answers.join('');
    
    const one = {
        name: 1,
        type: "12345",
        ans: 0
    };
    
    const two = {
        name: 2,
        type: "21232425",
        ans: 0
    };
    
    const three = {
        name: 3,
        type: "3311224455",
        ans: 0
    };
    
    while (one.type.length <= answers.length || two.type.length <= answers.length || three.type.length <= answers.length) {
        one.type += one.type;
        two.type += two.type;
        three.type += three.type;
    }
    
    for (let i = 0; i < answers.length; i++) {
        [one, two, three].forEach(obj => {
            if (obj.type[i] === answers[i]) obj.ans += 1;
        });
    }
    
    let maxAns = 0, maxPerson = [];
    [one, two, three].forEach(obj => {
        if (obj.ans >= maxAns) {
            maxAns = obj.ans;
        }
    });
    
    [one, two, three].forEach(obj => {
        if (obj.ans === maxAns) {
            maxPerson.push(obj.name);
        }
    });
    
    return maxPerson;
}