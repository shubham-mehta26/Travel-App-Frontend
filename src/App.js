import './App.css';
import { Home , SingleHotel } from "./Pages";
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
