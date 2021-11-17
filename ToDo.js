const list = [
    {
        id: 1,
        name: 'create a post',
        status: 'TODO',
        priority: 'low'
    },
    {
        id: 2,
        name: 'test',
        status: 'Done',
        priority: 'high'
    }
]

let incr = 2;

function addTask(Task,Priority) {
    list.push({id: incr+1, name: Task, status: 'TODO', priorty: Priority})
    incr += 1;
}

function changeStatus(Task, Status) {
    for (key of list) {
        if (key.name === Task) {
            key.status = Status
        }
    }
}

function deleteTask(Task) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === Task) {
            list.splice(i, 1)
        }
    }
}


changeStatus('create a post', 'In Progress')
addTask('Writing task', 'high')
list.pop()

addTask('Reading task', 'low')

addTask('Writing task', 'high')

deleteTask('Reading task')

addTask('Reading task', 'low')


console.log(list)


function showList() {

    console.log("Todo:");
    let sum = 0;                                                                                                        // Счётчик для вывода "-"
    for (key in list) {
        if (list[key] === "To Do") {
            console.log(` "${key}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }

    console.log("In Progress:")
    sum = 0;                                                                                                            // Оббнуление счётчика перед выводом "In Progress:"
    for (key in list) {
        if (list[key] === "In Progress") {
            console.log(` "${key}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }

    console.log("Done:");
    sum = 0;                                                                                                            // Обнуление счётчика перед выводом "Done:"
    for (key in list) {
        if (list[key] === "Done") {
            console.log(` "${key}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }
}


// showList();
