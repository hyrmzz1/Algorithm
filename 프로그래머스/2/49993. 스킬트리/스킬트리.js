function solution(skill, skillTrees) {
    let answer = 0;
    const skills = Array.from(skill);
    
    // skillTrees에서 skills 추출
    const skillsInTree = skillTrees.map(tree => {
        return tree.split('')
                    .filter(elem => skills.includes(elem))
                    .join('');
    });
    
    skillsInTree.forEach(elem => {
        if (elem.length === 0) answer++;    // 선행 스킬 포함 X
        else {
            // 스킬 순서 따지기
            const elemIdx = elem.split('').map(e => skills.indexOf(e));
            let isValid = true;
            
            for (let i = 0; i < elemIdx.length; i++) {
                if (elemIdx[i] !== i) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) answer++;
        }
    })
    
    return answer;
}