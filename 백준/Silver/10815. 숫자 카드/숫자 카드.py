import sys
n = int(sys.stdin.readline())
cards = list(map(int, sys.stdin.readline().split()))
m = int(sys.stdin.readline())
num = list(map(int, sys.stdin.readline().split()))

card_dict = {i: 0 for i in cards}    # 딕셔너리 컴프리헨션

for i in num:
    if i in card_dict:
        print(1, end=" ")
    else:
        print(0, end=" ")