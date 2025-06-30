import { useState, useEffect } from "react";
import DenunciaForm from "./components/DenunciaForm";
import DenunciaList from "./components/DenunciaList";

function App() {
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

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Registro de Denuncias Ciudadanas</h1>
      <DenunciaForm onAgregar={agregarDenuncia} />
      <DenunciaList denuncias={denuncias} onEliminar={eliminarDenuncia} onCambiarEstado={cambiarEstado} />
    </div>
  );
}

export default App;
