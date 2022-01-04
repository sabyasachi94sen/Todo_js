var i=1;
var j=1;
var k=1;
var count=0;
var flag=0;

var id_count=[];

function add1(){
    var box=document.querySelector(".modals");
    box.style.display="block";
    console.log(box);
   $('.main-container').addClass('filters').addClass('pointers');
   
}
function add2(){
    document.getElementById("btn").setAttribute(`onclick`,`createitems(${1})`);
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




function createitems(flag){

    var no_items=document.querySelector(".no-items");
    no_items.style.display="none";
    var box=document.querySelector(".modals");
    $('.main-container').removeClass('filters').removeClass('pointers');
    box.style.display="none";

    var text=document.getElementsByTagName("input")[0].value;
 
    


var card_container=document.getElementById("card-container-id");
var card=document.createElement("div");
card.className="card";
card.id=`Card${i}`;
var temp=card.id;
var p=document.createElement("p");
p.innerHTML=text;
p.className="card-title";
p.setAttribute(`onclick`,`title_click(${card.id})`);
card.appendChild(p);

var obj={
    id:card.id,
    flag:0,
    name:text,
    height:40,
    subtask_count:0,
}
id_count.push(obj);

obj={};






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
count++;
if(flag==1)
back();




i++;
}

function title_click(ids){
   
    var span1=document.createElement("span");
    span1.innerHTML="<i class='fas fa-chevron-circle-left' style='cursor:pointer' id='halu'></i>";
    span1.id="arrow-id";
    span1.setAttribute(`onclick`,`back()`)
    var temp=document.getElementById("tasklist");
    document.getElementById("task-span").style.display="none";
    document.getElementById("list-span").style.display="none";
    var tasklist=document.getElementById("task-id");
       var temp_id=document.getElementById(ids.id);
    var span2=document.createElement("span");
    for(var j=0;j<id_count.length;j++){
     
     var card_temp_id=document.getElementById(id_count[j].id);
    if((card_temp_id==temp_id && id_count[j].flag==0)){
       tasklist.appendChild(span1);
    span2.innerHTML="BACK";
    span2.id="back-id";
   id_count[j].flag=1;
   console.log(id_count);
   tasklist.appendChild(span2);
    }
}
    var original_id=document.getElementById(ids.id);




    for(var i=0;i<id_count.length;i++){
       var card_id=document.getElementById(id_count[i].id);
       
        
       if(card_id==original_id)
       {
           card_id.style.margin="auto";
           document.getElementById("title-id").innerHTML=id_count[i].name;
           continue;
       }
       else{
           card_id.style.display="none";
       }
   }
   document.getElementById("click-id").setAttribute("onclick","add2()");


    
}


function back(){
    document.getElementById("arrow-id").remove();
    document.getElementById("back-id").remove();
   document.getElementById("task-span").style.display="inline";
   document.getElementById("list-span").style.display="inline";

   for(var i=0;i<id_count.length;i++){
       id_count[i].flag=0;
       var x=id_count[i].id;
       var temp=document.getElementById(x);
       temp.style.display="block";
      $(temp).css("margin","");
      
   
   }

   document.getElementById("btn").setAttribute(`onclick`,`createitems(${0})`);
   document.getElementById("click-id").setAttribute("onclick","add1()");
   document.getElementById("title-id").innerHTML="";
  
   
 
}

function deletes(ids){
    
  console.log(id_count);
  ids.style.display="none";
  var no_items=document.querySelector(".no-items");
  count--;
  if(count==0)
  no_items.style.display="block";
  for(var i=0;i<id_count.length;i++){
      if(id_count[i].id==ids.id)
      id_count.splice(i,1);
  }
  console.log(id_count);
 

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
    for(var i=0;i<id_count.length;i++){
        if(id_count[i].id==id.id){
            
            id_count[i].subtask_count=id_count[i].subtask_count+1;
            if(id_count[i].subtask_count>=6){
                var h=id_count[i].height;
                h=h+3;
                id.style.height=`${h}vh`;
                id_count[i].height=h;
            }
        }
    }

   
   
   
    



}





var arr=[1,2,3,4,5,6];
var x=arr.map(a=>a>1);
console.log(x);

var y=arr.reduce((sum,n)=>sum+n,0);
console.log(y);




















