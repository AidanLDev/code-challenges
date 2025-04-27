nums = [1, 1, 1, 1, 1, 1, 2]

def findStray(nums):
    nums.sort()
    if nums[0] == nums[1]:
        return nums[len(nums) - 1]
    return nums[0]

print("Testing the following list for strays!: ", nums)
print("The stary is...: ", findStray(nums))

