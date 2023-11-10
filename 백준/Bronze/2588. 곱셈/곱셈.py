import sys
n = [int(sys.stdin.readline()) for _ in range(2)]

print(n[0] * (n[1] % 10))
print(n[0] * ((n[1] % 100) // 10))
print(n[0] * (n[1] // 100))
print(n[0] * n[1])