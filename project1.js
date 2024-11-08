function addTask(){
    let taskInput =document.getElementById("taskInput");
    let taskText =taskInput.value.trim();
    taskInput.value ="";
    if(taskText !== ""){
        let taskList =document.getElementById("taskList");
        let taskItem =document.createElement("li");
        taskItem.textContent =taskText;
        taskList.appendChild(taskItem);
        taskList.style.display ="block"

        taskItem.addEventListener("click",(e)=>{
            taskItem.classList.toggle("done")
        })

        let deleteButton =document.createElement("button");
        deleteButton.textContent ="Delete";
        taskItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", ()=>{
            taskList.removeChild(taskItem);
            
            if(taskList.childElementCount === 0){
                taskList.style.display ="none"
            }

        })

       
    }
    
}
