// properties and behaviors of a List

class List {

    tasks : string[];
    x : number;
    y : number;

    constructor(x : number, y : number, tasks : string[]) {
        this.x = x;
        this.y = y;
        this.tasks = tasks
    }

    removeTask(task : Task) : void {

    }
}

class subList extends List {

    constructor(x : number, y : number, tasks : string[]) {
        super(x, y, tasks);
    }

    move(xMove : number, yMove : number) {
        this.x = xMove;
        this.y = yMove;
    }
}