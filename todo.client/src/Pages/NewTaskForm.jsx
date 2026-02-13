function NewTaskForm() {
    return (
        <div>
            <form>
                <input placeholder="Task Name"></input>
                <select>
                    <option value="" selected disabled hidden>Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </form>
    </div>
    );
}

export default NewTaskForm;