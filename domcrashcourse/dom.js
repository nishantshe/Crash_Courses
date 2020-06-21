// console.dir(document)
// console.log(document.all[10])
// document.all[10].textContent="hello Nishant"
// console.log(document.forms);
// console.log(document.images)
// console.log(document.getElementById('header-title'));
// const c1=document.getElementById('header-title');
// //the difference between textcontent and innertext os textcontent does not pay attention to the style while innertext pays attention to the style
// // c1.textContent='hey hello';
// // c1.innerText="hey hello;"

// // c1.innerHTML="<h3>Hello Nishant</h3>"

// c1.style.borderBottom='solid 3px #000'

//how to change the color of list items
// const item= document.querySelector('.list-group-item');
// item.style.color='red';

// const item4 = document.querySelector('.list-group-item:last-child');
// item4.style.color='blue';

// const item2= document.querySelector('.list-group-item:nth-child(2)')
// item2.style.color='coral';

// //querySelectorall

// const title=document.querySelectorAll('.title')
// console.log(title)


//createElement

// const newdiv= document.createElement('div');
// //add classname
// newdiv.className="hello";
// //add id
// newdiv.id="hello";
// //set attribute
// newdiv.setAttribute('title','hello div');
// console.log(newdiv);

// const newdivtext = document.createTextNode('hello world');
// newdiv.appendChild(newdivtext);
// const container = document.querySelectosr('.container');
// const h1= document.querySelector('h1');
// newdiv.style.fontSize="30px";

// container.insertBefore(newdiv,h1);

// const button = document.querySelector("#button").addEventListener('click',buttonclick)
// function buttonclick(e){
  
//     // console.log("button clickeds")
//     // const si=document.querySelector('.bton');
//     // si.innerHTML="<h3>nishant</h3>";
//     //If you want to block new page using ctrl button
//     // if(e.ctrlKey==true){
//     //     alert('this item is blocked')
//     // }
//     // const header1 = document.querySelector("#header-title").textContent="changes";
    
//     // document.querySelector('#main').style.backgroundColor='#f4f4f4';



    
    

// }
// const button = document.querySelector("#button").addEventListener('dblclick',runevent)
// const button = document.querySelector("#button").addEventListener('mouseup',runevent)


// function runevent(e){
//     console.log('event type',e.type)
// }
// const box= document.querySelector('#box');
// box.addEventListener('mousemove',runevent)
// function runevent(e){
//     // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
//     document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
// }

// const Inputitem = document.querySelector('input[type="text"]');
// Inputitem.addEventListener('copy',runtime);
// Inputitem.addEventListener('paste',runtime);

// function runtime(e){
//     if(e.type=="copy"){
//         alert("you cannot copy anything")
//     }
//     if(e.type=="paste"){
//         alert("you cannot paste anything here");
//         // e.target.value="";
//     }
// }
const oninput=document.querySelector()