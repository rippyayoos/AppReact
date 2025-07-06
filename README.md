# 📢 Registro de Denuncias Ciudadanas

Aplicación web desarrollada con React para registrar, visualizar y filtrar denuncias ciudadanas. Incluye como valor agregado la visualización del **clima actual** usando la ubicación del usuario mediante una API pública.

---

## 🚀 Funcionalidades principales

- Registrar denuncias con tipo, fecha, descripción, ubicación y estado.
- Visualizar lista de denuncias.
- Cambiar el estado de una denuncia (pendiente → en revisión → resuelto).
- Filtrar denuncias por tipo y fecha.
- Persistencia local con `localStorage`.
- 📍 **Valor agregado:** muestra el clima actual según tu ubicación con datos de la API pública [Open-Meteo](https://open-meteo.com/).

---

## 🛠️ Tecnologías utilizadas

- React
- JavaScript
- HTML / CSS (Bootstrap)
- API pública: Open-Meteo
- LocalStorage para persistencia de datos

---


## 📦 Instalación y ejecución

1. Clona este repositorio:

```bash
git clone https://github.com/rippyayoos/AppReact.git

    Instala las dependencias:

npm install

    Inicia el servidor de desarrollo:

npm start

La aplicación estará disponible en: http://localhost:3000
```

## 🌤️ Clima actual

La app solicita permiso de geolocalización para mostrar el clima actual. En caso de que el usuario no lo permita, se mostrará un mensaje de error.