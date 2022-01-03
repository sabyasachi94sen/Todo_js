var i=1;
var j=1;
var k=1;
var count=0;
var flag=0;

var h=40;

function add(){
    var box=document.querySelector(".modals");
    box.style.display="block";
    console.log(box);
   $('.main-container').addClass('filters').addClass('pointers');
   
}

function closeitems(){
    var close=document.querySelector("#cross");
    close.style.display="none";
    $('.main-container').removeClass('filters').removeClass('pointers');
}




function createitems(){

    var no_items=document.querySelector(".no-items");
    no_items.style.display="none";
    var box=document.querySelector(".modals");
    $('.main-container').removeClass('filters').removeClass('pointers');
    box.style.display="none";

    var text=document.getElementsByTagName("input")[0].value;
   count++;
    


var card_container=document.getElementById("card-container-id");
var card=document.createElement("div");


var p=document.createElement("p");
p.innerHTML=text;






card.appendChild(p);
card.className="card";
card.id=`Card${i}`;


card_container.appendChild(card);


var hr=document.createElement("hr");
card.appendChild(hr);
if(text.length>18)
{
card.style.width="auto";
hr.style.width="auto";
}



var trash=document.createElement("div");
trash.className="sub-item";
trash.innerHTML='<i class="fa-solid fa-trash-can"></i>';
card.appendChild(trash);
var plus=document.createElement("div");
plus.innerHTML='<i class="fas fa-plus-circle"></i>';
plus.className="pluses";
card.appendChild(plus);
trash.firstChild.id=`c${i}`;
plus.firstChild.id=`b${i}`;
var trash_child=trash.firstChild;
trash_child.style.cursor="pointer";
trash_child.style.color="orange";
var plus_child=plus.firstChild;
plus_child.style.cursor="pointer";
plus_child.style.color="blue";
var parent_id=trash.parentNode.id;
var delete_card=document.querySelector(`#c${i}`);
delete_card.setAttribute(`onclick`,`deletes(${parent_id})`);
var sub_tasks=document.querySelector(`#b${i}`);
sub_tasks.setAttribute(`onclick`,`sub_task_box(${parent_id})`);
var temp=card;




i++;
console.log








     
   





}

function deletes(id){
    console.log(id);
  id.style.display="none";
  var no_items=document.querySelector(".no-items");
  count--;
  if(count==0)
  no_items.style.display="block";

}

function sub_task_box(ids){
    var btn=document.getElementById("btn");

        var k=ids.id;

    var box=document.querySelector(".modals");
    box.style.display="block";
    $('.main-container').addClass('filters').addClass('pointers');
    btn.setAttribute(`onclick`,`subtask(${k})`);
    
 
}

function subtask(id){
    var btn_count=0;

    btn_count++;
    var btn=document.querySelector("#btn");
    var modals=document.querySelector(".modals");
    $('.main-container').removeClass('filters').removeClass('pointers');
    modals.style.display="none";
   
 
    var text=document.getElementsByTagName("input")[0].value;
   
    localStorage.setItem("name",text);
    var task_container=document.createElement("div");
    task_container.className="task";
    var spans=document.createElement("span");
    spans.innerHTML=text;

    task_container.id=`t${j}`;
    var task_id=task_container.id;
    var b1=document.createElement("button");
    b1.className="b1";
    b1.innerHTML="Mark Done";
    b1.id=`k${k}`;
   

  



    id.appendChild(task_container);
     task_container.appendChild(spans);
  
    task_container.appendChild(b1);
    $(b1).click(function(){
        b1.style.display="none";
        spans.style.color="red";
        spans.style.textDecoration="line-through";
   
     })
       
      
    
  
    j++;
    k++;
    btn.setAttribute(`onclick`,`createitems()`);
   
   
   
    



}





var arr=[1,2,3,4,5,6];
var x=arr.map(a=>a>1);
console.log(x);

var y=arr.reduce((sum,n)=>sum+n,0);
console.log(y);

var abc=function(){
    window.location.hash="reload";
}
window.onload=abc();
















