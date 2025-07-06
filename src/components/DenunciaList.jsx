export default function DenunciaList({ denuncias, onEliminar, onCambiarEstado }) {
  return (
    <div>
      {denuncias.map((d) => (
        <div className="card mb-2" key={d.id}>
          <div className="card-body">
            <h5>{d.tipo} - {d.estado}</h5>
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
