document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add_btn');
    const newInput = document.getElementById('input_task');
    const taskList = document.getElementById('task_list');

    const addTask = () => {
        const inputText = newInput.value.trim();
        if (inputText === '') return;

        const listItem = document.createElement('li');

        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = inputText;
        taskInput.disabled = true;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit_btn');
        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Edit') {
                taskInput.disabled = false;
                taskInput.focus();
                editBtn.textContent = 'Save';
            } else {
                taskInput.disabled = true;
                editBtn.textContent = 'Edit';
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete_btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskInput);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        newInput.value = '';
    };

    addBtn.addEventListener('click', addTask);
    newInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
