



function crossOut() {
    var element = document.getElementById('to-do-list');
    element.classList.toggle("crossout");
}

function newTask() {
    let task ='';
    task = document.getElementById('todo-input').value;
    console.log(task);
}