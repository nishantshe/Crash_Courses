import math
def convertRoman(n):
    print(n)
    #Code here
    num = [1, 4, 5, 9, 10, 40, 50, 90,  
           100, 400, 500, 900, 1000] 
    sym = ["I", "IV", "V", "IX", "X", "XL",  
           "L", "XC", "C", "CD", "D", "CM", "M"] 
    roman=''
    while n>0:
        divisor=10**(len(str(n))-1)
        rem=n//divisor
        rem=rem*divisor
        n%=divisor
        

        while rem:
            if rem>=num[12]:
                roman+=sym[12]
                rem-=num[12]

            else:
                for i in range(1,len(num)):
                    print(rem)
                    if num[i]>rem and num[i-1]<=rem:
                        print('num1',num[i])
                        roman+=sym[i-1]
                        rem-=num[i-1]
                        

                        break
    print(roman)


convertRoman(17)



