import './App.css';
import React, { useState } from 'react'

function App() {
    const [newTodo, setNewTodo] = useState({ item: "", done: false});
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList( [...todoList, newTodo] );
        setNewTodo("");
    };

    const check = (index) => {
        const tempItem = todoList.filter( (todo, i) => i === index);
        const checkedItem = tempItem[0];
        console.log(checkedItem);
        checkedItem.done = !checkedItem.done;
        console.log(checkedItem);
        setTodoList( [...todoList.slice(0, index), checkedItem, ...todoList.slice(index + 1)] ); 
        console.log(todoList);
    };

    const handleDelete = (item) => {
        const tempList = todoList.filter(todo => todo !== item);
        setTodoList( [...tempList] );
    };

    return (
        <div className="App">

            <form onSubmit={ handleSubmit }>
                <div className='form-group row justify-content-center my-2'>
                    <label className='col-sm-1 col-form-label'>Todos: </label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" onChange={ (e) => setNewTodo({item: e.target.value, done: false}) } />
                    </div>
                    <button type="submit" class="col-sm-1 btn btn-primary">Add</button>
                </div>
            </form>

            <div className='my-2'> 
            {
                todoList.map((item, index) => (
                    <div className='my-2'>
                        <div clasName="form-check">
                            <label className="form-check-label strike" value={ item.done } htmlFor={ index }>{ item.item }</label>
                            <input className="form-check-input mx-2" type="checkbox" value={ item.done } id={ index } onClick={ () => check(index)}/>
                            <button class="btn btn-secondary mx-3" onClick={ () => handleDelete(item) }>Delete</button>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    );
}

export default App;
