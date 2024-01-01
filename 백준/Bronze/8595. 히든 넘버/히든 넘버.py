import sys
n = int(sys.stdin.readline())    # 단어 길이
word = sys.stdin.readline().rstrip()

num = ''
sum = 0
for i in word:
    if i >= '0' and i <= '9':
        num += i
    elif num != '':
        sum += int(num)
        # print(num)
        num = ''
if num != '':   # 히든 넘버가 맨 뒤에 오면 num = ''로 초기화안돼서 sum에 안더해짐
    sum += int(num)
print(sum)