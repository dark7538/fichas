import logo from './logo.svg';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
function App() {
  return (   
    <div className='App'>
      <Header title="FICHA SOCIO ECONÓMICA – ESTUDIANTIL" subtitle="UNIDAD DE TRABAJO SOCIAL" trititle="OFICINA DE BIENESTAR UNIVERSITARIO"/>
      <Formulario></Formulario>
    </div> 
    
    
    
  );
}

export default App;
