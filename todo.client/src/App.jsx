import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
    const [tasks, setTasks] = useState();

    const navigate = useNavigate();

    const addBtnSubmit = () => {
        navigate('/newform');
    }

    const contents = tasks === undefined
        ? <p>No tasks added</p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>;

    return (
        <div id="taskTableHeader">
            <div className="flex">
                <h1 id="tableLabel">To Do List</h1>
                <div className="flex center">
                    <button className="add-btn" onClick={ addBtnSubmit }>
                        <span>Add</span>
                    </button>
                </div>
            </div>
            { contents }
        </div>
    );
}

export default App;