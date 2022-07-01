
let taskList = [];
class TaskManager {
    constructor(currentid, name, desc, assignee, due, tStatus, tpriority) {
        this.currentid= currentid;
         this.name = name;
         this.desc = desc;
         this.assignee = assignee;
         this.due = due;
         this. tStatus = tStatus;
         this.tpriority = tpriority;
    }
    

    addingNewTask () {
        let newTask = {
            name: document.querySelector('#taskname').value,
            desc: document.getElementById('taskdescription').value,
            assignee: document.getElementById('assignee').value,
            due: document.getElementById('taskdate').value,
            tStatus: document.getElementById('status').value,
            tpriority: document.getElementById('priority').value
        };
        document.getElementById('submit-button').disabled = true;
        taskList.push(newTask);
    
        console.log(taskList);
        
        const taskHTML = `
            <div class = "card">
                <div class="card-body">
                    <div class="card-title"> <strong>Task ID:</strong> ${taskList.indexOf(newTask)+1}</div>
                    <div class="card-text">
                        Task Name: ${newTask.name} <br>
                        Description: ${newTask.desc} <br> 
                        Assignee: ${newTask.assignee} <br> 
                        Due Date: ${newTask.due} <br> 
                        Status: ${newTask.tStatus} <br> 
                        Priority: ${newTask.tpriority} <br>
                        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
                        <a href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div> `;
      
    
        const newDiv = document.createElement('div'); 
        newDiv.classList.add('new-class');
        document.getElementById('cardContainer').appendChild(newDiv);
        newDiv.innerHTML = taskHTML;
    }
    
    
}

//create a function to create new object and add it using the method addingnewtask

function addTask () {
    let newTask = new TaskManager ();
    newTask.addingNewTask();
}

//function to reset form

function formReset() {
    let myForm = document.getElementById('thisForm');
    myForm.reset();
}




//Event Listeners

document.getElementById('submit-button').addEventListener("click", addTask);
document.getElementById('submit-button').addEventListener("click", formReset);
document.getElementById('close-button').addEventListener("click", formReset);
document.getElementById('add-button').addEventListener("click", formReset);







































///////////////////////// This is what I started with(just for my future reference)
// let taskList = [];

// const  addingNewTask = () => {
//     let newTask = {
//         name: document.querySelector('#taskname').value,
//         desc: document.getElementById('taskdescription').value,
//         assignee: document.getElementById('assignee').value,
//         due: document.getElementById('taskdate').value,
//         tStatus: document.getElementById('status').value,
//         tpriority: document.getElementById('priority').value
//     };

//     taskList.push(newTask);

//     console.log(taskList);
    
//     const taskHTML = `<div class = "card">
//         <div class="card-body">
//             <div class="card-title">${newTask.name}</div>
//             <div class="card-text">
//                 Description: ${newTask.desc} <br> 
//                 Assignee: ${newTask.assignee} <br> 
//                 Due Date: ${newTask.due} <br> 
//                 Status: ${newTask.tStatus} <br> 
//                 Priority: ${newTask.tpriority} <br>
//             </div>
            
//         </div>
//     </div>`;
  

//     const newDiv = document.createElement('div');
//     document.getElementById('cardContainer').appendChild(newDiv);
//     newDiv.innerHTML = taskHTML;
    
// }










