
# Enter your code here. Read input from STDIN. Print output to STDOUT
def sub(n,arr):
    sum1=0
    sum2=0
    max_ending_here=0
    max_so=0
    for i in range(len(arr)):
        max_ending_here= max_ending_here+arr[i]
     
        if (max_so<max_ending_here):
            
            max_so=max_ending_here
            
        if max_ending_here<0:
            max_ending_here=0
        if arr[i]>0:
            sum2+=arr[i]


  
        
    if sum2==0:
        sum2=max(arr)
    if max_so==0:
        max_so=max(arr)
    return str(max_so),str(sum2)

    

if __name__=='__main__':
    t=int(input())
    while t:
        n=int(input())
        arr=list(map(int,input().split()))

        print(' '.join(sub(n,arr)))
        t-=1
