import React, {useEffect, useState} from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect((): void => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, [])

    // useEffect(()=> {
    //   const saved = localStorage.getItem('todos')
    //   saved ? setTodos(JSON.parse(saved)) : setTodos(todos);
    // }, []);

    // useEffect(()=> {
    //   localStorage.setItem('todos', JSON.stringify(todos));
    // }, [todos])

    const addTodoHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
        localStorage.setItem('todos', JSON.stringify([newTodo, ...todos]));
        // console.log('add new todo: ' , title);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )));
    }

    const removeHandler = (id: number) => {
        const isRemove = confirm('Вы уверены, что хотите удалить это елемент?');
        isRemove && setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <>
            <TodoForm addTodo={addTodoHandler} />

            <TodoList onRemove={removeHandler} onToggle={toggleHandler} todos={todos} />
        </>
    )
}
