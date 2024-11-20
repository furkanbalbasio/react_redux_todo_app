import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";


const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            dispatch(addTodo({
                id: Date.now(), text
            }));    
            setText('');    
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Yeni Yapilacak ...">
            </input>
            <button type="submit">
                Ekle
            </button>
        </form>
    );
};

export default AddTodo;