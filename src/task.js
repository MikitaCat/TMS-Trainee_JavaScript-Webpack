
export default class Task {
    constructor(name, checked) {
        this.name = name.trim();
        this.checked = checked;
    }
    showTaskInfo() {
        console.log(`Task ${this.name} is created and the status is ${this.cheked}`);
    }


}