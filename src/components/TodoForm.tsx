import React, { useRef } from "react";

interface TodoFormProps {
    addTodo: (title: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const ref = useRef<HTMLInputElement>(null)

    // const [title, setTitle] = useState<string>("");

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // console.log(title);
            // setTitle('');
            addTodo(ref.current!.value); 
            ref.current!.value = ''; // clear input
        }
    }

    return (
        <div className="input-field mt2">
            <input 
                // onChange={changeHandler}
                // value={title} 
                ref={ref}
                type="text" 
                id="title" 
                placeholder="Введите название дела"
                onKeyPress={keyPressHandler}
            />
            <label 
                htmlFor="title" 
                className="active" 
            >
                Введите название дела
            </label>
        </div>
    )
}