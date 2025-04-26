import datetime
print("Count sort example!!")

unsorted_arr = [2, 2, 3, 0, 2, 3, 0, 3]
sorted_arr_count = [0, 0, 0, 0, 0]
sorted_arr = []

def countSort(unsorted_arr):
    for i in range(len(unsorted_arr)):
        sorted_arr_count[unsorted_arr[i]] += 1
    for i in range(len(sorted_arr_count)):
        for j in range(sorted_arr_count[i]):
            sorted_arr.append(i)



start_time = datetime.datetime.now()
print("Unsorted array: ", unsorted_arr)
countSort(unsorted_arr)
print("Sorted array: ", sorted_arr)
end_time = datetime.datetime.now()
print("Time taken: ", end_time - start_time)
