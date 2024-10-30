import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const updateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {
            updateUser(newName);
            setNewName("");
        }
    };

    return (
        <div>
            <h2>Update User Name</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <button type="submit"></button>
            </form>
        </div>
    );
};

export default updateUser;