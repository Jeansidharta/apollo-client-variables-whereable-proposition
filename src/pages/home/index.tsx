import React from 'react';
import TodoComponent from "../../components/todo-component";
import { useHomeQuery } from './data';

import './style.css';

function Home () {
	const [nameFilter, setNameFilter] = React.useState<undefined | string>();
	const [doneFilter, setDoneFilter] = React.useState<undefined | boolean>();

	const { data, loading } = useHomeQuery({ done: doneFilter, name: nameFilter});

	function handleNameChange (event: React.ChangeEvent<HTMLInputElement>) {
		const newName = event.target.value;

		if (!newName) setNameFilter(undefined);
		else setNameFilter(newName);
	}

	function handleDoneChange (event: React.ChangeEvent<HTMLInputElement>) {
		const newDone = event.target.checked;

		if (!newDone) setDoneFilter(undefined);
		else setDoneFilter(newDone);
	}

	function renderTodos () {
		if (loading) return null;
		return data!.Todo.map(todo => (
			<TodoComponent todo={todo} key={todo.id} />
		));
	}

	return (
		<main className='home-page-container'>
			<div className='filter-container'>
				<h1>Filter</h1>
				<label>
					<p>Name</p>
					<input onChange={handleNameChange} type='text' />
				</label>
				<label>
					<p>Done?</p>
					<input onChange={handleDoneChange} type='checkbox' />
				</label>
			</div>
			<div>
				{renderTodos()}
			</div>
		</main>
	)
};

export default Home;