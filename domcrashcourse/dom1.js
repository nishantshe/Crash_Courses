const form = document.getElementById('addForm');
const itemlist = document.getElementById('items');
const filter=document.getElementById('filter');
form.addEventListener("submit",additem);
itemlist.addEventListener("click",removeitem);
filter.addEventListener("keyup",filteritems);
function additem(e){
    e.preventDefault();//prevent the initial default action of form
    //get the input items list
    const a= document.getElementById('item').value;

    //crerate new li element
    const li= document.createElement('li');
    
    //li classname
    li.className="list-group-item";

    //append the text node
    li.appendChild(document.createTextNode(a));

    const btn =document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn)
    itemlist.appendChild(li);
}
function removeitem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("do you want to delete the item?")){
            const li1=e.target.parentElement;
            itemlist.removeChild(li1);
        }
    }
}
function filteritems(e){
    //convert to laower case
    const text=e.target.value.toLowerCase();
    //get liss
    const ite= document.getElementsByTagName('li');
    Array.from(ite).forEach(function(ite2){
        const itemName=ite2.firstChild.textContent;
        //Why use index of instead of instead of === to comapre strings?
        //Answer: if we use == it will show the results only when the strings are equal bt we wanna show the results even if one letter matches thus we use indexOf which will give the first occureance of letter
        if(itemName.toLowerCase().indexOf(text)!=-1){
            ite2.style.display="block"

        }
        else{
            ite2.style.display="none"
        }
    })
    
}