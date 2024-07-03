
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import CardsDetail from './component/CardsDetail';
import Cards from './component/Cards';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetail />} />
   </Routes>
  </>
  );
}

export default App;