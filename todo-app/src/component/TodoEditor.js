import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSumit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onsubmit();
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 할 일을 입력해주세요</h4>
            <div className="editor_wrapper">
                <input 
                 ref={inputRef}
                 value={content}
                 onChange={onChangeContent}
                 onKeyDown={onKeyDown}
                 placeholder="할 일을 입력해주세요"
                />
                <button onClick={onSumit}>
                  추가
                </button>
            </div>
        </div>
    );
};

export default TodoEditor;