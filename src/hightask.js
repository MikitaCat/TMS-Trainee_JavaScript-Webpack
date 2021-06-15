import Task from './task.js'
import { highTasksArr } from './store'

export default class HighTask extends Task {
    constructor(name, checked, type = 'highTask') {
        super(name, checked);
        this.type = type;
    }

    render() {
        let highTasksList = document.querySelector('.high-task-list')
        let li = document.createElement('li')
        let label = document.createElement('label')
        let checkbox = document.createElement('input')
        let deleteBtn = document.createElement('button')
        let line = document.createElement('hr')
        deleteBtn.className = 'deleteBtn'

        highTasksList.appendChild(li)

        label.textContent = this.name

        checkbox.type = 'checkbox'
        checkbox.className = 'checkbox'
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                this.checked = true
                console.log(this)
                localStorage.setItem('high', JSON.stringify(highTasksArr))
                console.log(highTasksArr)
            }
        })


        label.className = 'custom-checkbox'
        label.appendChild(checkbox)
        li.appendChild(label)
        li.appendChild(deleteBtn)
        li.appendChild(line)
        deleteBtn.innerHTML = '&#10006;'

        deleteBtn.addEventListener('click', () => {
            highTasksList.removeChild(li)
            let highTaskIndex = highTasksArr.findIndex((el) => el.name === this.name)
            console.log(highTaskIndex)
            highTasksArr.splice(highTaskIndex, 1)
            console.log(highTasksArr)
            localStorage.setItem('high', JSON.stringify(highTasksArr))
        })

    }

}

