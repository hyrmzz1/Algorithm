function solution(brown, yellow) {
    for (let height = 3; height <= (brown + yellow); height++) {
        let width = (brown + yellow) / height;
        
        if ((height - 2) * (width - 2) === yellow) {
            return [width, height];
        }
    }
}