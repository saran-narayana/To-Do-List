
const form = document.querySelector('.input-field');
const input = document.querySelector('input');
const taskList = document.querySelector('.task-list');


function addTask(event) {

    event.preventDefault();
    
    const inputValue = input.value;
    console.log(inputValue);
    
    const listItem = document.createElement('li');
    const taskDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskName = document.createElement('span');
    taskName.innerText = inputValue;
    const deleteButton = document.createElement('button');
    
    taskDiv.classList.add('task-info');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = `<i class="fas fa-trash" ></i>`


    taskList.appendChild(listItem);
    listItem.appendChild(taskDiv);
    listItem.appendChild(deleteButton);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskName);
    
    input.value = '';
}

function taskModify(event){
const clickedEle = event.target;
console.log(clickedEle);

if(clickedEle.classList[1] === 'fa-trash'){
    const task = clickedEle.parentElement.parentElement;
    console.log(task);
    task.remove();
}

if(clickedEle.tagName.toLowerCase() === 'span'){
    const task = clickedEle.innerHTML;
    clickedEle.innerHTML = `<input class="edit-input" type="text" value="${task}"/>`;

    const editInput = clickedEle.querySelector('input');
    editInput.addEventListener('blur',()=>{
        const newValue = editInput.value;
        clickedEle.innerHTML = newValue;
    });

}
}


//syntax: element.addEVENTlistener(event,function)
//event listener to add new task ,edit,delete
form.addEventListener('submit',addTask);

taskList.addEventListener('click',taskModify)