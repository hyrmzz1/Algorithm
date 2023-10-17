import sys

while 1:
    n = list(map(int, sys.stdin.readline().rstrip().split()))
    if(n[0] == 0 and n[1] == 0):
        break
    else:
        print(n[0] + n[1])