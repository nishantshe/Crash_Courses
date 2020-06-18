const post=[
    {title:'post one',body:'This is post One'},
    {title:'post two',body:'This is post Two'}

]
function getpost(){
    setTimeout(()=>{
        let output='';
        post.forEach((posts,index)=>{
            output+=`<li>${posts.title}</li>`;
        })
        document.body.innerHTML=output;
    },1000)
};

function createpost(post1){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        post.push(post1);
        const err=false;
        if(!err){
            res();
        }
        else{
            rej('something went wrong');
        }
    },2000)
    });
};
// for one promise

// createpost({title:'Post three',body:'this is third post'})
//    .then(getpost)
//    .catch(err=>console.log(err));
// async await

async function init(){
    await createpost({title:'Post three',body:'this is third post'});
    getpost();
}
init();
