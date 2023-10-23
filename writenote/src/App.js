import './App.css';
import inicio from './componentes/inicio';
import lista_tareas from './componentes/lista_tareas';
import lista_compras from './componentes/lista_compras'
import {BrowserRouter as router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Route>
        <Routes>
          <Route path='/' element = {<inicio/>}/>
          <Route path='/lista_tareas' element = {<lista_tareas/>}/>
          <Route path='/lista_compras' element = {<lista_compras/>}/>
        </Routes>
      </Route>
    </div>
  );
}

export default App;
