const list = []                                                                                                         // Инициализация массива задач

let incr = 0;                                                                                                           // id для задач

function addTask(Task,Priority) {                                                                                       // Функция добавления задач
    list.push({id: incr+1, name: Task, status: 'TODO', priorty: Priority})
    incr += 1;
}

function changeStatus(Task, Status) {                                                                                   // Функция смены статуса
    for (key of list) {
        if (key.name === Task) {
            key.status = Status
        }
    }
}

function deleteTask(Task) {                                                                                             // Функция удаления задач
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === Task) {
            list.splice(i, 1)
        }
    }
}

//                             Смена статуса, добавление, удаление задач для проверки

addTask('Reading task', 'low')
addTask('Writing task', 'high')
deleteTask('Reading task')
addTask('Reading task', 'low')
addTask('test', 'low')
addTask('Homework', 'high')
changeStatus('test', 'In Progress')
changeStatus('Homework', 'Done')



function showList() {                                                                                                   // Функция вывода текущих задач

    console.log("TODO:");
    let sum = 0;                                                                                                        // Счётчик для вывода "-"
    for (key of list) {
        if (key.status === "TODO") {
            console.log(` "${key.name}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }

    console.log("In Progress:")
    sum = 0;                                                                                                            // Оббнуление счётчика перед выводом "In Progress:"
    for (key of list) {
        if (key.status === "In Progress") {
            console.log(` "${key.name}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }

    console.log("Done:");
    sum = 0;                                                                                                            // Обнуление счётчика перед выводом "Done:"
    for (key of list) {
        if (key.status === "Done") {
            console.log(` "${key.name}",`);
            sum += 1;
        }
    }
    if (sum === 0) {
        console.log(` -`);
    }
}

showList();
