input_string = "codewars"

print("Going to count the vowels in: ", input_string)
count = 0
vowels = ["a", "e", "i", "o", "u"]
for letter in input_string:
    if letter in vowels:
        count += 1

print("Result: ", count)
