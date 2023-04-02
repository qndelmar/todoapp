export interface ITodo {
    name: string,
    importance: number,
    color: string,
    isClosed: boolean
    id: number
}
export interface ITodos {
    todos: ITodo[],
    sortedTodos: ITodo[]
}