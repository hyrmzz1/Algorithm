function solution(new_id) {
    new_id = new_id.toLowerCase(); // 1단계
    
    new_id = new_id.replace(/[^\w|\-|\.]/g, ''); // 2단계
    
    new_id = new_id.replace(/[.]{2,}/g, '.');    // 3단계
    
    new_id = new_id.replace(/^\.|\.$/g, '');    // 4단계
    
    if (new_id.length === 0) new_id = 'a';  // 5단계
    
    // 6단계
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
        
        if (new_id.charAt(new_id.length - 1) === '.') {
            new_id = new_id.slice(0, new_id.length - 1);
        }
    }
    
    // 7단계
    if (new_id.length <= 2) {
        while (new_id.length < 3) {
            new_id += new_id.charAt(new_id.length - 1)
        }
    }
    
    return new_id;
}