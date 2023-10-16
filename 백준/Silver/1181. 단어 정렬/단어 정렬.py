import sys
n = int(sys.stdin.readline())
tc =[sys.stdin.readline().strip() for i in range(n)]

# 중복 단어 제거
tc = list(set(tc))  # sort()는 리스트 메서드이므로 다시 리스트형으로 변환.

# 길이 짧은 순으로 정렬 후 길이 같으면 사전 순으로 정렬
tc.sort(key = lambda x : (len(x), x))

print("\n".join(tc))