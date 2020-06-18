# Enter your code here. Read input from STDIN. Print output to STDOUT
from collections import defaultdict
from collections import deque
import os
class graph:
    def __init__(self,n):
        self.dic=defaultdict(list)
        for i in range(n):
            self.dic[i+1]=[]
        
    def addnode(self,u,v):
        self.dic[u].append(v)
        self.dic[v].append(u)
       
    def bfs(self,n,s):
        visited=[False]*(n+1)
        queue=deque([])
        queue.append(s)
        final={}
        for i in range(1,n+1):
            final[i]=0
        fin1=[]
        visited[s]=True 
        while queue:
            v=queue.popleft()
            for n in self.dic[v]:
                if visited[n]==False:
                    queue.append(n)
                    visited[n]=True
                    final[n]=final[v]+1
        for i in final.keys():
            if i!=s:
                if final[i]==0:
                    fin1.append('-1')
                else:
                    fin1.append(str(6*final[i]))

        return fin1
        
    
    
if __name__ == '__main__':
    
    q=int(input())
    for i in range(q):
        nm=input().split()
        n=int(nm[0])
        m=int(nm[1])
        s1=graph(n)
        for _ in range(m):
            uv=input().split()
            u=int(uv[0])
            v=int(uv[1])
            s1.addnode(u,v)
        s=int(input())
        result=s1.bfs(n,s)
        print(' '.join(result))
  



