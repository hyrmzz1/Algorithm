def solution(keymap, targets):
    answer = []
    
    for target in targets:
        # ABCD
        cnt = 0
        
        for char in target:
            # A
            idx = 100
            is_not_key = False
            
            # 각 keymap에서 char의 인덱스 확인, 최소값을 idx에 저장. 없을 경우 바로 -1 리턴
            for key in keymap:
                if char in key:
                    is_not_key = True;
                    idx = min(idx, key.index(char) + 1)
            
            if is_not_key:
                cnt += idx
            else:
                cnt = -1
                break
            
        answer.append(cnt)
        
    return answer