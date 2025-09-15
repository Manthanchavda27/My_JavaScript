const taskinput = document.getElementById('taskinput');
const addtaskBtn = document.getElementById('taskbtn');
const taskList = document.getElementById('tasklist');
const clearBtn = document.getElementById('completebtn');

let tasks = [];

function AddTask(){
     const TaskText = taskinput.value.trim();

     if(TaskText!==""){
        tasks.push({text:TaskText});    
        taskinput.value="";
        displayTask();
     }
}

function displayTask(){

    taskList.innerHTML="";
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.innerHTML=`<input type="checkbox" id="task-${index}" ${task.completed?"checked":""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change",()=>toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTask();
}

function clearcompletedTasks(){
    tasks=tasks.filter(task=>!task.completed);
    displayTask();
}

addtaskBtn.addEventListener("click",AddTask);
clearBtn.addEventListener("click",clearcompletedTasks);

displayTask();
