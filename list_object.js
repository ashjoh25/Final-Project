"use strict";
// properties and behaviors of a List
class List {
    constructor(x, y, tasks) {
        this.x = x;
        this.y = y;
        this.tasks = tasks;
    }
    removeTask(task) {
    }
}
class subList extends List {
    constructor(x, y, tasks) {
        super(x, y, tasks);
    }
    move(xMove, yMove) {
        this.x = xMove;
        this.y = yMove;
    }
}
