class Solution:
    def addDigits(self, num: int) -> int:
      if num <= 9: return num
      
      total = 0
      
      while num > 0:
        print("num is: ", num)
        total += num % 10
        print("total is now: ", total)
        num = num // 10
        print("num is now: ", num, " after // 10")
      
      return self.addDigits(total)
    
test = Solution()
test.addDigits(38)
# test.addDigits(99)