import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Blogs from './Components/Blogs'
import Blogs1 from './Components/Blogs1'
import { Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
  <Navbar/>
  <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='/Blogs' element={<Blogs/>}/>
     <Route path='/Blogs1' element={<Blogs1/>}/>
     
     </Routes>
     <Footer/>
     
    </>
  );
}

export default App;
