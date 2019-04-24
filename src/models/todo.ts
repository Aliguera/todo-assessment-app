export class Todo {
    constructor(public id: number,
                public name: string,
                public description: string,
                public date: any,
                public done: boolean,
                public position: Object
    ) {}
}