import sys
a, b = sys.stdin.readline().split()

reverse_a = int(a[2] + a[1] + a[0])
reverse_b = int(b[2] + b[1] + b[0])

print(reverse_a) if reverse_a > reverse_b else print(reverse_b)