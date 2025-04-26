num = 12
result = []

def divisors(num):
    if num < 2:
        print(str(num) + " is prime")
    
    for i in range(2, num -1):
        if num % i == 0:
            result.append(i)

    if len(result) == 0:
        print(str(num) + " is prime")

    print(result)

divisors(num)


