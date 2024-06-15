document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');

    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        
        const orderedTaskList = document.getElementById('ordered-task-list');
        const unorderedTaskList = document.getElementById('unordered-task-list');
        
        if (document.querySelector('.tab-buttons button:nth-child(1)').classList.contains('active')) {
            const taskCount = orderedTaskList.childElementCount + 1;
            li.textContent = `${taskCount}. ${task}`;
            orderedTaskList.appendChild(li); // Append the list item to the ordered list
        } else {
            li.textContent = task;
            unorderedTaskList.appendChild(li); // Append the list item to the unordered list
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            li.parentElement.removeChild(li);
        };

        li.appendChild(deleteButton);

        taskInput.value = '';
    }
}

function showOrderedList() {
    const orderedTab = document.querySelector('.tab-buttons button:nth-child(1)');
    const unorderedTab = document.querySelector('.tab-buttons button:nth-child(2)');
    
    // Add active class to ordered tab and remove from unordered tab
    orderedTab.classList.add('active');
    unorderedTab.classList.remove('active');

    document.getElementById('unordered-task-list').style.display = 'none';
    document.getElementById('ordered-task-list').style.display = 'block';
}

function showUnorderedList() {
    const orderedTab = document.querySelector('.tab-buttons button:nth-child(1)');
    const unorderedTab = document.querySelector('.tab-buttons button:nth-child(2)');
    
    // Add active class to unordered tab and remove from ordered tab
    orderedTab.classList.remove('active');
    unorderedTab.classList.add('active');

    document.getElementById('ordered-task-list').style.display = 'none';
    document.getElementById('unordered-task-list').style.display = 'block';
}
