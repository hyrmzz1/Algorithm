def solution(array):
    array.sort()    # sort() : 오름차순 정렬
    mid_index = len(array) // 2
    return array[mid_index]