import './styles.css';
import NavBar from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    
        <>
        
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/items/:idProducto" element={<ItemDetailContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
             
            </Routes>
        </BrowserRouter>
        </>

  );
}



export default App;
