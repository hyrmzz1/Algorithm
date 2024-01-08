import sys
n = int(sys.stdin.readline())
cards = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline())
num = list(map(int, sys.stdin.readline().split()))

def binary_search(arr, target):
    start = 0
    end = len(arr) - 1

    while(start <= end):
        mid = (start + end) // 2

        if arr[mid] == target:
            return True
        elif arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

cards.sort()
for i in num:
    if binary_search(cards, i): # True
        print(1, end = " ")
    else:
        print(0, end = " ")
