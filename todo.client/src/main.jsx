import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Routing from './Routing';

function Main() {
    const [tasks, setTasks] = useState();

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
                    <button className="add-btn">
                        <span>Add</span>
                    </button>
                </div>
            </div>
            {contents}
        </div>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Routing />
  </StrictMode>,
)
