import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActionPage from './components/ActionPage/ActionPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* try to make all function, arrow function */}
        <Routes>
          <Route path='/' element={<ActionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
