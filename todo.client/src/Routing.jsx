import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewTaskForm from './Pages/NewTaskForm';
import App from './App';

function Routing() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="newform" element={<NewTaskForm />}></Route>
              <Route path="/" element={<App />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default Routing;