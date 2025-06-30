import { useState } from 'react';
import Filtros from './components/Filtros';
import DenunciaForm from './components/DenunciaForm';
import DenunciaList from './components/DenunciaList';
import './App.css';


function App() {
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");
  const filtrar = (campo, valor) => {
    if (campo === "tipo") setFiltroTipo(valor);
    if (campo === "fecha") setFiltroFecha(valor);
  };

  const denunciasFiltradas = denuncias.filter((d) =>
    d.tipo.toLowerCase().includes(filtroTipo.toLowerCase()) &&
    d.fecha.includes(filtroFecha)
  );

  return (
    <div className="container mt-4"> <h1 className="mb-4">Registro de Denuncias Ciudadanas</h1>
      <Filtros tipo={filtroTipo} fecha={filtroFecha} onFiltro={filtrar} />
      <DenunciaForm onAgregar={agregarDenuncia} />
      <DenunciaList
        denuncias={denunciasFiltradas}
        onEliminar={eliminarDenuncia}
        onCambiarEstado={cambiarEstado}
      />
    </div>
  );
}

export default App
