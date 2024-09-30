def solution(s, skip, index):
    answer = ''
    
    # in, find 함수로 문자열 내에 해당 문자가 포함됐는지 확인할 수 있다.
    # 따라서 문자열 s, skip을 한문자씩 분리할 필요가 없다.
    filtered_alphabet = [chr(x + 97) for x in range(26) if not chr(x + 97) in skip]
    
    for char in s:
        char_idx = filtered_alphabet.index(char);
        new_char = filtered_alphabet[(char_idx + index) % len(filtered_alphabet)]
        answer += new_char
        
    return answer