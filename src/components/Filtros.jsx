export default function Filtros({ tipo, fecha, onFiltro }) {
  return (
    <div className="d-flex mb-3 gap-2">
      <input type="text" className="form-control" placeholder="Filtrar por tipo" value={tipo} onChange={(e) => onFiltro("tipo", e.target.value)} />
      <input type="date" className="form-control" value={fecha} onChange={(e) => onFiltro("fecha", e.target.value)} />
    </div>
  );
}
