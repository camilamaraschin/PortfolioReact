import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './Componentes/PaginaInicial/PaginaInicial'
import { Navbar } from './Componentes/Navbar/Navbar'
import Projetos from './Componentes/Projetos/Projetos'
import Processos from './Componentes/Processos/BPMN'
import PowerBi from './Componentes/PowerBi/PowerBi'


function App() {
  

  return (
    <>
       
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<PaginaInicial/>}/>
      <Route path='/ProjetosWeb' element={<Projetos/>}/>
      <Route path='/Processos' element={<Processos/>}/>
      <Route path='/PowerBi' element={<PowerBi/>}/>
      

    </Routes>
   </BrowserRouter>
        
    </>
  )
}

export default App
