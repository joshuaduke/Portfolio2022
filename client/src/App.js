import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Blog from  './pages/Blog';
import BlogPost from './pages/BlogPost'
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/blog/:id' element={<BlogPost />}/>
        <Route path='/timeline' element={<TimelinePage />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
