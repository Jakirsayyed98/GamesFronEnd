import './App.css';
import Nav from './componants/nav';
import {BrowserRouter,  Route,  Routes} from 'react-router-dom';
import Footer from './componants/footer';
import SignUp from './componants/signup';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Nav />
     <Routes>
     <Route path='/' element={<h1>Home Page Element </h1>} ></Route>
     <Route path='/Add' element={<h1>Add Page Element </h1>} ></Route>
     <Route path='/Delete' element={<h1>Delete Page Element </h1>} ></Route>
     <Route path='/Update' element={<h1>Update Page Element </h1>} ></Route>
     <Route path='/Profile' element={<h1>Profile Page Element </h1>} ></Route>
     <Route path='/Logout' element={<h1>Logout Page Element </h1>} ></Route>
     <Route path='/SignUp' element={<SignUp/>} ></Route>
     </Routes>

     <Footer/>
     </BrowserRouter>

    
    </div>
  );
}

export default App;
