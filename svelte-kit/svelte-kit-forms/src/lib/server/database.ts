export type Todo = { id: number; text: string; completed: boolean };

let todos: Todo[] = [{ id: Date.now(), text: 'Todo', completed: false }];

export function getTodos() {
	return todos;
}

export function addTodo(text: string) {
	const todo: Todo = {
		id: Date.now(),
		text,
		completed: false
	};
	todos.push(todo);
}

export function removeTodo(id: number) {
	console.log('REMOVE TODO', id);
	todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
	todos = [];
}
