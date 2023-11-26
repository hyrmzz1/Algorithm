import sys
a, b = sys.stdin.readline().split()

reverse_a = int(a[::-1])
reverse_b = int(b[::-1])

print(reverse_a) if reverse_a > reverse_b else print(reverse_b)