import datetime
print("Quick sort example baby!")

# Quick sort takes in a list of values, chooses one of those values and uses that as it's pivot.
# It then sorts the list into two lists, one with values less than the pivot and one with values greater than the pivot.
# It then recursively calls itself on the two lists until the lists are sorted.

def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] < pivot:
            i+= 1
            array[i], array[j] = array[j], array[i]

    array[i+1], array[high] = array[high], array[i+1]
    return i+1


def quickSort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if low < high:
        pivot_index = partition(array, low, high)
        quickSort(array, low, pivot_index - 1) # Run quicksort on the left side of the pivot
        quickSort(array, pivot_index + 1, high) # Run quicksort on the right side of the pivot

my_array = [64, 34, 25, 12, 22, 11, 90, 5]
print("Unsorted array: ", my_array)
start_time = datetime.datetime.now()
quickSort(my_array)
print("Sorted array:", my_array)
end_time = datetime.datetime.now()

print("Time taken: ", end_time - start_time)
