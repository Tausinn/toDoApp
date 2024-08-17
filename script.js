
const inputBox = document.getElementById("input-text");
const ulEl = document.getElementById("ul-lists");
const paragraph = document.getElementById("list-items")
function addItem(){
    if(inputBox.value === ''){
        
        alert("Please add your tasks");}
        else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ulEl.appendChild(li);
    }
    inputBox.value = "";
        
    }
 function deleteItem(){
    if(confirm("Are you sure you want to delete?")){
        location.reload();
    }
 }
 