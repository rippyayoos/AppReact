import React, { useEffect, useState } from 'react';
import { obtenerClima } from '../services/api';

const ClimaActual = () => {
  const [clima, setClima] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          try {
            const climaActual = await obtenerClima(coords.latitude, coords.longitude);
            setClima(climaActual);
          } catch (err) {
            console.error(err);
            setError("No se pudo obtener el clima.");
          }
        },
        () => setError("No se pudo acceder a la ubicación.")
      );
    } else {
      setError("Geolocalización no disponible.");
    }
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!clima) return <div className="text-muted">Cargando clima...</div>;

  return clima ? (
     <div className="card mt-4"> <div className="card-body"> <h5 className="card-title">Clima Actual</h5> <p className="card-text">Temperatura: {clima.temperature}°C</p> <p className="card-text">Viento: {clima.windspeed} km/h</p> </div> </div>
  ) : null;
};

export default ClimaActual;