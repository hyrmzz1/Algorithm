import sys
score = int(sys.stdin.readline().rstrip())
ans = ""

if (score >= 90):
    ans = "A"
elif (score >= 80):
    ans = "B"
elif (score >= 70):
    ans = "C"
elif (score >= 60):
    ans = "D"
else:
    ans = "F"

print(ans)