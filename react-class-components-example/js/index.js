import React from 'react';
import ReactDOM from 'react-dom';

//import Name from './name';
import TodoItem from './todoItem';

//Måste alltid starta med en stor bokstav för att React ska veta att det är en komponent
//Parenteser efter return används för att kunna skriva på fler rader
function App() {
    return (
        <section className="wrapper">
            <h1>Todo</h1>
            <ul className="todo-list">
                <TodoItem text="Köp kaffe" done={false} />
                <TodoItem text="Köp kaka" done={true} />
                <TodoItem text="Brygg kaffe" done={false} />
                <TodoItem text="Fika" done={false} />
            </ul>
        </section>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));