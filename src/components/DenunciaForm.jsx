import { useState } from "react";

export default function DenunciaForm({ onAgregar }) {
  const [denuncia, setDenuncia] = useState({
    ubicacion: "",
    tipo: "",
    descripcion: "",
    fecha: "",
    estado: "pendiente"
  });

  const handleChange = (e) => {
    setDenuncia({ ...denuncia, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ubicacion, tipo, descripcion, fecha } = denuncia;

    if (!ubicacion || !tipo || !descripcion || !fecha) {
      alert("Completa todos los campos");
      return;
    }

    onAgregar({ ...denuncia, id: Date.now() });
    setDenuncia({
      ubicacion: "",
      tipo: "",
      descripcion: "",
      fecha: "",
      estado: "pendiente"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input name="ubicacion" className="form-control mb-2" placeholder="Ubicación" onChange={handleChange} value={denuncia.ubicacion} />
      <input name="tipo" className="form-control mb-2" placeholder="Tipo de problema" onChange={handleChange} value={denuncia.tipo} />
      <textarea name="descripcion" className="form-control mb-2" placeholder="Descripción" onChange={handleChange} value={denuncia.descripcion}></textarea>
      <input type="date" name="fecha" className="form-control mb-2" onChange={handleChange} value={denuncia.fecha} />
      <button className="btn btn-primary">Agregar Denuncia</button>
    </form>
  );
}
