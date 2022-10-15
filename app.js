// alert("hello")

// navbar
let list=document.getElementById('list')
document.getElementById('nav').addEventListener('click',()=>{
    if(list.style.height=="100%"){
        list.style.height="0"
    }
    else{
        list.style.height="100%";
    }
})
