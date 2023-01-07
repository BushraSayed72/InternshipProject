import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Blogs1 from './Components/Blogs1'
import Blogs2 from './Components/Blogs2'
import Blogs3 from './Components/Blogs3'
import { Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
  <Navbar/>
  <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='/Blogs1' element={<Blogs1/>}/>
     <Route path='/Blogs2' element={<Blogs2/>}/>
     <Route path='/Blogs3' element={<Blogs3/>}/>
    
     
     </Routes>
     <Footer/>
     
    </>
  );
}

export default App;
