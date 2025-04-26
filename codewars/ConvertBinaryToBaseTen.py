binary_arr = [0, 0, 0, 1]
binary_arr_two = [0, 0, 1, 0]

def binary_array_to_int(arr):
    # Convert element to a string
    str_arr = [str(element) for element in arr]
    print (str_arr)
    joined_ints = ''.join(str_arr)
    print("joined_ints: ", joined_ints)

    converted_binary = int(joined_ints, 2)
    print("converted_binary: ", converted_binary)

binary_array_to_int(binary_arr)
binary_array_to_int(binary_arr_two)
