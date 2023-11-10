import sys
n = [int(sys.stdin.readline()) for _ in range(2)]

a = n[0] * (n[1] % 10)
b = n[0] * ((n[1] % 100) // 10)
c = n[0] * (n[1] // 100)
d = a + 10 * b + 100 * c

print(a)
print(b)
print(c)
print(d)