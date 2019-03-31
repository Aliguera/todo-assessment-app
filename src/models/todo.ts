export class Todo {
    constructor(public id: number,
                public name: string,
                public description: string,
                public date: Date,
                public done: boolean
    ) {}
}