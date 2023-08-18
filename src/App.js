import './App.css';
import Navbar from './components/Navbar';
import Form from './components/CreateForm';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Read from './components/Read';
import Update from './components/Update';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Form/>}/>
          <Route exact path="/read" element={<Read/>}/>
          <Route exact path="/edit/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
