function addBar(h){
    var lastChild=document.querySelector("#chart").lastElementChild;
console.log(lastChild);
var myBar=document.createElement("i");
myBar.innerHTML="d";

var cls="bars";
myBar.setAttribute("class",cls);

var id=Number(lastChild.id.charAt(lastChild.id.length-1))+1;

myBar.setAttribute("id","b"+id);
//  console.log(myBar.id);

var  style = window.getComputedStyle(lastChild); //it takes all style properties  
var margin = style.getPropertyValue('margin-left');//returned margin of lastchild
// console.log(margin);
document.querySelector("#chart").appendChild(myBar); //added new child to div
myBar.style.marginLeft=String(parseInt(margin)+40)+"px";

//setting height of bar ;
myBar.style.height=h+"%";
}