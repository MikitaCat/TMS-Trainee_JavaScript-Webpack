import Task from './task.js'
import './assets/style.css'
import Arrow2 from './Arrow2.png'
import { addHighTask, addMidTask, addLowTask, openWindow, loadHighTasks, loadLowTasks, loadMidTasks } from './Actions.js'
import HighTask from './hightask'
import { highTasksArr } from './store.js';


const highBtn = document.querySelector('.high-task-btn');
const imgArrow = document.querySelector('img.arrow');
imgArrow.src = Arrow2;
let addTask = document.querySelector('.addTask')
const midBtn = document.querySelector('.mid-task-btn')
const lowBtn = document.querySelector('.low-task-btn')
// const deleteBtn = document.querySelector('.deleteBtn')



imgArrow.addEventListener('click', openWindow);

highBtn.addEventListener('click', addHighTask);

midBtn.addEventListener('click', addMidTask);

lowBtn.addEventListener('click', addLowTask);


window.addEventListener("load", loadHighTasks);
window.addEventListener("load", loadMidTasks);
window.addEventListener("load", loadLowTasks);



