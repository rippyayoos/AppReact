import { useState, useEffect } from 'react';
import Filtros from './components/Filtros';
import DenunciaForm from './components/DenunciaForm';
import DenunciaList from './components/DenunciaList';
import ClimaActual from './components/ClimaActual';
import './App.css';

function App() {
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");

  const filtrar = (campo, valor) => {
    if (campo === "tipo") setFiltroTipo(valor);
    if (campo === "fecha") setFiltroFecha(valor);
  };

  const [denuncias, setDenuncias] = useState(() =>
    JSON.parse(localStorage.getItem("denuncias")) || []
  );

  useEffect(() => {
    localStorage.setItem("denuncias", JSON.stringify(denuncias));
  }, [denuncias]);

  const agregarDenuncia = (nueva) => {
    setDenuncias([...denuncias, nueva]);
  };

  const eliminarDenuncia = (id) => {
    setDenuncias(denuncias.filter((d) => d.id !== id));
  };

  const cambiarEstado = (id) => {
    setDenuncias(
      denuncias.map((d) =>
        d.id === id ? { ...d, estado: siguienteEstado(d.estado) } : d
      )
    );
  };

  const siguienteEstado = (estado) => {
    if (estado === "pendiente") return "en revisión";
    if (estado === "en revisión") return "resuelto";
    return "resuelto";
  };

  const denunciasFiltradas = denuncias.filter((d) =>
    d.tipo.toLowerCase().includes(filtroTipo.toLowerCase()) &&
    d.fecha.includes(filtroFecha)
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Registro de Denuncias Ciudadanas</h1>
      <Filtros tipo={filtroTipo} fecha={filtroFecha} onFiltro={filtrar} />
      <DenunciaForm onAgregar={agregarDenuncia} />
      <DenunciaList
        denuncias={denunciasFiltradas}
        onEliminar={eliminarDenuncia}
        onCambiarEstado={cambiarEstado}
      />
      <ClimaActual />
    </div>
  );
}

export default App;