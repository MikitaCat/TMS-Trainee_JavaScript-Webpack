import Task from './task.js'
import { midTasksArr } from './store'

export default class MidTask extends Task {
    constructor(name, checked, type = 'midTask') {
        super(name, checked);
        this.type = type;
    }

    render() {
        let midTasksList = document.querySelector('.mid-task-list')
        let li = document.createElement('li')
        let label = document.createElement('label')
        let checkbox = document.createElement('input')
        let deleteBtn = document.createElement('button')
        let line = document.createElement('hr')
        deleteBtn.className = 'deleteBtn'

        midTasksList.appendChild(li)

        label.textContent = this.name

        checkbox.type = 'checkbox'
        checkbox.className = 'checkbox'

        label.className = 'custom-checkbox'
        label.appendChild(checkbox)
        li.appendChild(label)
        li.appendChild(deleteBtn)
        li.appendChild(line)
        deleteBtn.innerHTML = '&#10006;'

        deleteBtn.addEventListener('click', () => {
            midTasksList.removeChild(li)
            let midTaskIndex = midTasksArr.findIndex((el) => el.name === this.name)
            console.log(midTaskIndex)
            midTasksArr.splice(midTaskIndex, 1)
            console.log(midTasksArr)
            localStorage.setItem('mid', JSON.stringify(midTasksArr))
        })


    }

}

