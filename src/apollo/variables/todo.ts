import { Todo } from "../../models/todo";
import { makeVar } from "@apollo/client";

const initialTodoValues: Todo[] = [
	{
			id: '0',
			name: 'Todo 1',
			done: false,
	}, {
			id: '1',
			name: 'Todo 2',
			done: true,
	}, {
			id: '2',
			name: 'Todo 3',
			done: false,
	}, {
			id: '3',
			name: 'Todo 4',
			done: true,
	},
];

const todoVar = makeVar<Todo[]>(initialTodoValues);

function readTodo (_: unknown, { args }: { args: Partial<Todo> | null }) {
	const todos = todoVar();
	if (!args) return todos;
	return todos.filter(todo => {
		if (args.name !== undefined && todo.name !== args.name) return false;
		if (args.id !== undefined && todo.id !== args.id) return false;
		if (args.done !== undefined && todo.done !== args.done) return false;
		return true;
	});
}

export const TodoPolicy = {
	read: readTodo,
}