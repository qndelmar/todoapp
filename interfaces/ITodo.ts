export interface ITodo {
    name: string,
    importance: number,
    color: string,
    isClosed: boolean
}
export interface ITodos {
    todos: ITodo[]
}