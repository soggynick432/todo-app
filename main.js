let myList = document.getElementsByTagName('LI');
var i;
for(i = 0; i < myList.length; i++) {
    let span = document.createElement('SPAN');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    myList[i].appendChild(span);
}

let close = document.getElementsByClassName('close');
var i;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert('You must write something1');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    let span = document.createElement('SPAN');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

function saveTask(e) {

    let taskName = document.getElementById('taskName').value;
    let taskDescription = document.getElementById('taskDescription').value;

    let tasks = {
        name: taskName,
        description: taskDescription
    }

    if(localStroage.getItem('tasks')==null){
        var task =[]; task.push(tasks);
        localStorage.SetItem('task',JSON.stringyfy(task));
        }else{
        var myTask = localStorage.getItem('task'); myTask.push(task);
        // then reset the localStorage
        localStorage.setItem('task',JSON.stringify(myTask));
    }

    function fetchTask() {
        let task = JSON.parse(localStorage.getItem('task'));

        let taskResult = document.getElementById('taskResult');
        taskResult.innerHTML = '';

        for(let i = 0; i < task.length; i++) {

            let name = task[i].name;
            let description = task[i].description;

            taskResult.innerHTML += `<div class='well'><h3>` + name + ' ' + description + ' </h3>'
            '</div>'
        }
    }
}