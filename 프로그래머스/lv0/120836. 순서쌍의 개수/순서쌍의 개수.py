def solution(n):
    # 순서쌍의 개수는 n의 약수의 개수와 같다.
    # n의 약수? n 이하의 자연수 중 n과 나누어 떨어지는 수
    answer = 0
    for i in range(n, 0, -1):
        if n % i == 0:
            answer += 1
    return answer