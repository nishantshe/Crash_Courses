const post=[
    {title:'post one', body:'This is post one'},
    {title:'post two', body:'This is post one'}

];
function getpost(){
    setTimeout(()=>{
        let output='';
        post.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
           
        })
        document.body.innerHTML=output;

    },1000);
    
}
function createpost(post1,callback){
    setTimeout(()=>{
        post.push(post1)
        //if we don't use callback here we will only get two posts as output because the getpost takes 1000ms and createpost takes 2000ms
        callback();
    },2000)
}

createpost({title:'post three', body:'this is third post'},getpost)
