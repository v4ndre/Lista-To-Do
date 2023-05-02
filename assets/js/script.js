//função que adiciona tarefa
function addTask(){
    
    //titulo da tarefa

    const taskTitle = document.querySelector("#task-title").value;
    
    if(taskTitle){
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);
        
        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classList.remove("template")
        newTask.classList.remove("hide");

        const list = document.querySelector("#task-list")

        list.appendChild(newTask);

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //adicionar evento de completar tarefa

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        //limpar texto
        document.querySelector("#task-title").value = "";
    }
}

//função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//função de completar tarefa

function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();
});