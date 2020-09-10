import { Todo } from "../../models/todo";
import { makeVar } from "@apollo/client";
import { makeWhereablePolicy } from "../../lib/where";

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

function readTodo () {
	return todoVar();
}

export const TodoPolicy = {
	read: makeWhereablePolicy(readTodo),
}