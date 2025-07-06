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

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return clima ? (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h2>Clima Actual</h2>
      <p>Temperatura: {clima.temperature}°C</p>
      <p>Viento: {clima.windspeed} km/h</p>
    </div>
  ) : null;
};

export default ClimaActual;