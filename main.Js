
document.body.classList.add(localStorage.getItem("pageColor") || 'red')

var el =document.querySelectorAll('.switcher-color li');
var classeList = [];

//loop

for(var i=0;i<el.length;i++){
    //get classes list
    classeList.push(el[i].getAttribute("data-color"));
    el[i].addEventListener("click",function(){
    document.body.classList.remove(...classeList)
    document.body.classList.add(this.getAttribute("data-color"));
    localStorage.setItem("pageColor",this.getAttribute("data-color"))        
    },
    false
    );
}

console.log(classeList);