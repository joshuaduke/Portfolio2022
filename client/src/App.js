import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Blog from  './pages/Blog';
import BlogPost from './pages/BlogPost'
import Home from './pages/Home';
import Timeline from './pages/Timeline';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/blog/:id' element={<BlogPost />}/>
        <Route path='/timeline' element={<Timeline />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
