import sys
# 전체 원소
n = int(sys.stdin.readline().rstrip())
n_arr = list(map(int, sys.stdin.readline().rstrip().split()))
# 찾고자 하는 원소
m = int(sys.stdin.readline().rstrip())
m_arr = list(map(int, sys.stdin.readline().rstrip().split()))

# n_arr 오름차순 정렬 하기 (이분 탐색의 전제)
n_arr.sort()

def binary_search(n_arr, target, start, end):
    if start > end:
        return 0
    
    mid = (start + end) // 2  # 인덱스값은 정수니까 몫 연산자 사용
    # target이 범위의 중간값이면
    if n_arr[mid] == target:
        return 1
    # target이 범위의 중간값보다 왼쪽에 있으면
    elif n_arr[mid] > target:
        # end 범위 수정
        return binary_search(n_arr, target, start, mid - 1)
    # target이 범위의 중간값보다 오른쪽에 있으면
    else:
        return binary_search(n_arr, target, mid + 1, end)

# n_arr에 m_arr의 요소들이 있는지 각각 확인
# m_arr[0]부터 확인해보자 => target
for target in m_arr:
    start = 0
    end = len(n_arr) - 1
    print(binary_search(n_arr, target, start, end))