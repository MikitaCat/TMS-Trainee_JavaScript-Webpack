import Task from './task'
import { lowTasksArr } from './store'

export default class LowTask extends Task {
    constructor(name, checked, type = 'lowTask') {
        super(name, checked);
        this.type = type;
    }


    render() {
        let lowTasksList = document.querySelector('.low-task-list')
        let li = document.createElement('li')
        let label = document.createElement('label')
        let checkbox = document.createElement('input')
        let deleteBtn = document.createElement('button')
        let line = document.createElement('hr')
        deleteBtn.className = 'deleteBtn'

        lowTasksList.appendChild(li)

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
            lowTasksList.removeChild(li)
            let lowTaskIndex = lowTasksArr.findIndex((el) => el.name === this.name)
            console.log(lowTaskIndex)
            lowTasksArr.splice(lowTaskIndex, 1)
            console.log(lowTasksArr)
            localStorage.setItem('low', JSON.stringify(lowTasksArr))
        })
    }
}