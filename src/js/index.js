//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";


// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'; // Importa todos los iconos sólidos
// import { far } from '@fortawesome/free-regular-svg-icons'; // Importa todos los iconos regulares
// import { fab } from '@fortawesome/free-brands-svg-icons'; // Importa todos los iconos de marcas


// Añade los iconos importados a la biblioteca
// library.add(fas, far, fab);

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import ToDoApp from "./component/TodoApp.jsx";

//render your react application
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<ToDoApp />, document.getElementById("root"));



