function solution(n) {
    const cntOne = (num) => {
        return num.toString(2).split('').filter(elem => elem ==="1").length;
    }
    
    const nCntOne = cntOne(n);
    
    while (true) {
        n++;
        if (nCntOne === cntOne(n)) return n;
    }
}