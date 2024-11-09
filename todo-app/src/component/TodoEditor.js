import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const onChangeContent = () => {
        setContent(e.target.value);
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 할 일을 입력해주세요</h4>
            <div className="editor_wrapper">
                <input 
                 value={content}
                 onChange={onChangeContent}
                 placeholder="할 일을 입력해주세요"
                />
                <button>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;