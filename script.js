let users=[];
let listDiv=document.getElementById("container");

function handleSubmit(){
  let name=document.getElementById("name").value;
  let profession=document.getElementById("profession").value;
  let age=document.getElementById("age").value;
  let error=document.getElementById("msg_ref");
  
  if(name=="" || profession=="" || age==""){
    error.innerHTML=`<div class="msg_error">Error: Please make sure all fields are filled before adding an employee.</div>`;
    return;
  }
  
  users.push({
     id: users.length+1,
     name: name,
     profession: profession,
     age: age
  });
  
  console.log(users);
  
  document.getElementById("name").value="";
  document.getElementById("profession").value="";
  document.getElementById("age").value="";
  
  helper();
  
  error.innerHTML=`<div class="msg_success">Success: Employee Added!</div>`;
}

function helper(){
listDiv.innerHTML = '';
users.forEach((item,i) =>{
   listDiv.innerHTML+=`
   <div class="list_box">
                <div class="paraContainer">
                    <p>${item.name}</p>
                    <p>${item.profession}</p>
                    <p>${item.age}</p>
                </div>

                <button onclick="handleDelete(${i})">Delete</button>
    </div>
   `;
});
   
}

function handleDelete(index){
users.splice(index,1);
helper();
}
