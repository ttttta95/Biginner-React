import "./TodoEditor.css";

const TodoEditor = () => {
    return (
        <div className="TodoEditor">
            <h4>새로운 할 일을 입력해주세요</h4>
            <div className="editor_wrapper">
                <input placeholder="할 일을 입력해주세요" />
                <button>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;