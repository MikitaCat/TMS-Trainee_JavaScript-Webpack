import HighTask from './hightask.js';
import Task from './task.js'
import MidTask from './midtasks'
import LowTask from './lowtasks'
import { highTasksArr, midTasksArr, lowTasksArr } from './store'

export function openWindow() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('active');
}

let addTask = document.querySelector('.addTask')
let nameError = document.querySelector('.right-name')



function findDoublicates() {
    console.log(highTasksArr, midTasksArr, lowTasksArr)

    let doubleHightask = highTasksArr.findIndex((el) => { return el.name === addTask.value.trim() })

    let doubleMidtask = midTasksArr.findIndex((el) => { return el.name === addTask.value.trim() })

    let doubleLowtask = lowTasksArr.findIndex((el) => { return el.name === addTask.value.trim() })

    console.log(doubleHightask, doubleMidtask, doubleLowtask);

    if (doubleHightask === -1 && doubleMidtask === -1 && doubleLowtask === -1) {
        return false
    } else {
        return true
    }
}


export function addHighTask() {
    let hightask = new HighTask(addTask.value, false);


    if (addTask.value.trim() === '') {
        nameError.classList.toggle('incorrect-name')
        console.log("Error")
        nameError.textContent = 'Incorrect task name'
    } else if (findDoublicates()) {
        nameError.classList.toggle('incorrect-name')
        nameError.textContent = 'This task is already added'
        console.log("Error")
    }

    else {
        nameError.classList = 'right-name'
        highTasksArr.push(hightask);
        hightask.render()
        addTask.value = ''
        localStorage.setItem('high', JSON.stringify(highTasksArr));

        console.log(highTasksArr)
    }



}

export function loadHighTasks() {
    if (localStorage.getItem('high')) {
        JSON.parse(localStorage.getItem('high')).forEach(element => {
            highTasksArr.push(element);
        });
        highTasksArr.forEach((el) => {
            let task = new HighTask(el.name, el.checked, el.type);
            task.render();
        })
    }
}



export function addMidTask() {

    let midtask = new MidTask(addTask.value, false);

    if (addTask.value.trim() === '') {
        console.log("Error")
        nameError.classList.toggle('incorrect-name')
        nameError.textContent = 'Incorrect task name'
        console.log("Error")
    } else if (findDoublicates()) {
        nameError.classList.toggle('incorrect-name')
        nameError.textContent = 'This task is already added'
        console.log("Error")
    } else {
        nameError.classList = 'right-name'
        midTasksArr.push(midtask);
        midtask.render()
        addTask.value = ''
        localStorage.setItem('mid', JSON.stringify(midTasksArr));
    }

}

export function loadMidTasks() {
    if (localStorage.getItem('mid')) {
        JSON.parse(localStorage.getItem('mid')).forEach(element => {
            midTasksArr.push(element)
        });
        midTasksArr.forEach((el) => {
            let task = new MidTask(el.name, el.checked, el.type);
            task.render();
        })
    }
}

export function addLowTask() {
    let lowtask = new LowTask(addTask.value, false);

    if (addTask.value.trim() === '') {
        console.log("Error")
        nameError.classList.toggle('incorrect-name')
        console.log("Error")
        nameError.textContent = 'Incorrect task name'
    } else if (findDoublicates()) {
        nameError.classList.toggle('incorrect-name')
        nameError.textContent = 'This task is already added'
        console.log("Error")
    } else {
        nameError.classList = 'right-name'
        lowTasksArr.push(lowtask)
        lowtask.render()
        addTask.value = ''
        localStorage.setItem('low', JSON.stringify(lowTasksArr))
    }
}

export function loadLowTasks() {
    if (localStorage.getItem('low')) {
        JSON.parse(localStorage.getItem('low')).forEach(element => {
            lowTasksArr.push(element)
        });
        lowTasksArr.forEach((el) => {
            let task = new LowTask(el.name, el.checked, el.type);
            task.render();
        })
    }
}







