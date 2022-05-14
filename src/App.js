import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ShowArticle from './components/ShowArticle/ShowArticle';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* try to make all function, arrow function */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':id' element={<ShowArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
