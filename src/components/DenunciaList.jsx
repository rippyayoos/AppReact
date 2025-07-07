export default function DenunciaList({ denuncias, onEliminar, onCambiarEstado }) {
  if (denuncias.length === 0) {
    return <p className="text-muted">No hay denuncias registradas.</p>;
  }
  return (
    <div>
      {denuncias.map((d) => (
        <div className="card mb-2" key={d.id}>
          <div className="card-body">
            <h5> {d.tipo} -{" "} <span className={`badge ${ d.estado === "pendiente" ? "bg-warning text-dark" : d.estado === "en revisión" ? "bg-info" : "bg-success" }`}> {d.estado} </span> </h5>
            <p><strong>Ubicación:</strong> {d.ubicacion}</p>
            <p>{d.descripcion}</p>
            <p><small>{d.fecha}</small></p>
            <button className="btn btn-success btn-sm me-2" onClick={() => onCambiarEstado(d.id)}>Cambiar Estado</button>
            <button className="btn btn-danger btn-sm" onClick={() => onEliminar(d.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
