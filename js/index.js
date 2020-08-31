var list = [];
var listId = '';

function openAddListPopup() {
    document.getElementById('todo-app').classList.add('blur');
    document.getElementById('pop-up').style.display = "flex";
    
}

function closePopup() {
    document.getElementById('todo-app').classList.remove('blur');
    document.getElementById('pop-up').style.display = "none";
}

function displayList() {
    if (list > 0) {
        document.getElementById('noTodo').classList.add('display-none');
    } else {
        document.getElementById('noTodo').classList.remove('display-none');
    }
}

function addNewList() {
    var new_list = document.getElementById('new-list');
    var newElement = document.createElement('div');
    let new_list_name = document.getElementById('add_new_list').value;
    newElement.setAttribute('id', 'list_Item' + list);
    newElement.setAttribute('class', 'task');
    newElement.innerHTML = `<div class="task-header">${new_list_name}</div><div class="task-section">
    <ul id= task_list${list} class="list-type-none">
    </ul>
    </div>
    <div class="list-buttons"> 
        <button class="rounded-circle delete-icon" onclick="removeList(this)"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button class="plus-icon" onclick="openAddItem(this)"><i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i></button>
    </div>`;
    new_list.appendChild(newElement);
    list += 1;
    displayList();
    document.getElementById('add_new_list').value = '';
    closePopup();
}

function removeList(element) {
    console.log('removeList', element)
    let listID = element.parentNode.parentNode;
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
    list -= 1;
    displayList();
}

function openAddItem(listElement) {
    listId = listElement.parentNode.parentNode;
    document.getElementById('todo-app').classList.add('blur');
    document.getElementById('popup-inner').style.display = "flex";
}

function closeAddItem() {
    document.getElementById('todo-app').classList.remove('blur');
    document.getElementById('popup-inner').style.display = "none";
}

function addNewItem() {
    if (listId) {
        var active_list_element = document.getElementById(listId.getAttribute('id'));
        var task_name = document.getElementById('add-new-task').value;
        var task_node = document.createElement('div');
        task_node.setAttribute('class', '');
        task_node.innerHTML = `&nbsp;&nbsp;${task_name}
            <button class="mark-done" onclick="markTaskAsDone(this)">Mark Done</button>`;
        active_list_element.childNodes[1].childNodes[1].appendChild(task_node);
        document.getElementById('add-new-task').value = '';
        closeAddItem();
    }
}

function markTaskAsDone(element) {
    element.parentNode.classList.add('completed-task');
    element.remove();
}