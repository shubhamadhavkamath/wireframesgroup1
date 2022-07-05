// create Task Card HTML
const createTaskHtml = (id, name, description, assignee, dueDate, status, priority) => {
    const taskHtml = `
    <div class="col-sm-6" id=${id}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Task</h5>
        <p class="card-text">
          Task Name: ${name}
          <br />
          Description: ${description}
          <br />
          Assignee: ${assignee}
          <br />
          Date: ${dueDate}
          <br />
          Status: ${status}
          <br />
          Priority: ${priority}
        </p>
        <a
          href="#"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          >Edit</a
        >
        <button class="btn btn-primary">Delete</button>
        <button class="btn btn-primary done-button ${status === 'Done' ? 'invisible' : 'visible'}">Mark as done</button>  
      </div>
    </div>
  </div>`
    return taskHtml
  }
  
  // The TaskManager Class
  class TaskManager {
    constructor(currentId = 0) {
      this.currentId = currentId
      this.tasks = []
    }
  
    addTask(inputName, inputDescription, inputAssignee, inputDate, inputStatus = 'todo', inputPriority) {
      let taskObject = {
        id: this.currentId++,
        name: inputName,
        description: inputDescription,
        assignedTo: inputAssignee,
        dueDate: inputDate,
        status: inputStatus,
        priority: inputPriority
      }
      this.tasks.push(taskObject)
    }
  
    getTaskById(taskId) {
      let foundTask = this.tasks.filter(task => task.id === taskId)
      return foundTask
    }
  
    store() {
      localStorage.setItem('currentId', JSON.stringify(this.currentId))
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  
    load() {
      if (localStorage.getItem('tasks')) {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      }
      if (localStorage.getItem('currentId')) {
        this.currentId = Number(localStorage.getItem('currentId'))
      }
    }
  
    render(renderTasks) {
      let tasksHtmlList = []
      tasksHtmlList = renderTasks.map(task => {
        let date = new Date(task.dueDate)
        let formattedDate = (date.toLocaleDateString())
        let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status, task.priority)
        return taskHtml
      })
      let tasksHtml = tasksHtmlList.join('\n')
      const taskList = document.getElementById('taskList')
      taskList.innerHTML = tasksHtml
    }
  }