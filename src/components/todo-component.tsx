import React from 'react';
import { Todo } from '../models/todo';

import './style.css';

type TodoProps = React.PropsWithoutRef<{
	todo: Todo
}>;

type TodoComponent = React.FunctionComponent<TodoProps>;

const TodoComponent: TodoComponent = ({ todo }) => {
	return (
		<div className='todo-component-root'>
			<p>name: {todo.name}</p>
			<p style={{ color: todo.done ? 'green' : 'red' }}>{todo.done ? 'Feito!' : 'Não feito!'}</p>
		</div>
	);
}

export default TodoComponent;