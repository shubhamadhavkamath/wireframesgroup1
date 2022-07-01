
    console.log("linked");
/**
 * @type HTMLInputElement
 */

const taskInput = document.getElementById('taskname');
const nameValue = document.getElementById('taskname').value;
const descValue = document.getElementById('taskdescription').value;
const assigneeValue = document.getElementById('assignee').value;
const dueValue = document.getElementById('taskdate').value;
const statusValue = document.getElementById('status').value;
const priorityValue = document.getElementById('priority').value;

const validateName = () => {
    
    if(taskInput.value.length === 0) {
        // taskInput.style.border = '1px solid red';
        document.getElementById('taskNameErr').style.display = 'none';
        document.getElementById('submit-button').disabled= true;
    } else if (taskInput.value.length < 8) {
        document.getElementById('taskNameErr').style.display = 'block';
        taskInput.style.border = '1px solid red';
        document.getElementById('submit-button').disabled= true;
    } else {
        document.getElementById('taskNameErr').style.display = 'none';
        taskInput.style.border = '1px solid #ced4da'; 
    }
}
taskInput.addEventListener('blur', validateName);

const validateForm = () => {
    if(document.getElementById('taskname').value != '' && document.getElementById('taskdescription').value != '' && document.getElementById('assignee').value != '' && document.getElementById('taskdate').value != '' && document.getElementById('status').value != '' && document.getElementById('priority').value != '') {
        document.getElementById('submit-button').disabled = false;  
    }
    else {
        document.getElementById('submit-button').disabled = true;
    }
}


//This validates the form when hovering over it 
document.getElementById('thisForm').addEventListener('mouseover', validateForm);
document.getElementById('thisForm').addEventListener('mouseover', validateName);



//To reset the errors on modal dismissal 

const resetError = () => {
    document.getElementById('taskNameErr').style.display = 'none';
    taskInput.style.border = '1px solid #ced4da';
}

document.getElementById('submit-button').addEventListener("click", resetError);
document.getElementById('close-button').addEventListener("click", resetError);
document.getElementById('add-button').addEventListener("click", resetError);




//Display today's date
const todaysDate = new Date();
const day = todaysDate.getDate();
// const thisMonth = todaysDate.getMonth()+1;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const thisMonth = months[todaysDate.getMonth()];
const thisYear = todaysDate.getFullYear();

document.getElementById('dateDisplay').innerText= `Today is ${day}  ${thisMonth}  ${thisYear}.`;
