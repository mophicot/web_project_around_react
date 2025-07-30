# Tripleten web_project_around_react

1. NOMBRE DEL PROYECTO
   web_project_around_react

2. DESCRIPCIÓN DEL PROYECTO Y SU FUNCIONALIDAD.

   Este proyecto es el PRIMERO en contemplar React y JSX

Objetivo
Recrear y modernizar el proyecto "Alrededor de los Estados Unidos" migrándolo a React paso a paso, modularizando la interfaz en componentes reutilizables y manteniendo la misma lógica y estructura visual que el proyecto original en HTML/CSS + JS vanilla.

Este proyecto fue creado con Vite.
🔥El archivo index.html real está en vite-project/index.html.🔥

🌍Para correr el proyecto:
cd vite-project
npm install
npm run dev

3. DESCRIPCIÓN DE LAS TECNOLOGÍAS Y TÉCNICAS UTILIZADAS.

SPRINT 13

Fase Descripción
1 Instalación y configuración del proyecto con Vite + React.
2 Reescritura del HTML original a JSX, ajustando atributos y estructura.
3 Modularización en componentes: Header, Main, Footer.
4 Creación de componentes para formularios dentro de popups: EditProfile, EditAvatar, NewCard.
5 Creación del componente Card usando datos ficticios y renderizado dinámico con .map().
6 Implementación del popup especial para imágenes (ImagePopup), integrándolo en el flujo de popups usando useState.

🛠 Tecnologías, librerías y conceptos que utilizamos:
✅ React:
Componentes funcionales.
JSX.
Props (paso de datos y callbacks).
Hooks: useState para manejar estado (popups, tarjetas seleccionadas).

     ✅ JavaScript moderno (ES6+):
        Desestructuración.
        Funciones flecha.
        Métodos de arrays como .map() para renderizado dinámico.

     ✅ Vite:
        Herramienta moderna para bundling y desarrollo rápido.

     ✅ CSS:
        Reutilización del CSS del proyecto original.
        Ajustes para clases dinámicas (ej. botón de like activo).

     ✅ Buenas prácticas:
        Modularización por carpetas.
        Nombres claros y semánticos.
        Separación de componentes reutilizables y específicos.

🧠 Conceptos importantes que practicamos:
Renderizado condicional con el operador ternario (? :).
Uso de props para pasar funciones (ej: onCardClick) y datos.
Diferencia entre props y las propiedades internas de un objeto.
key única en listas renderizadas.
Apertura y cierre de popups controlado con estado.

4. Enlace a GitHub Pages

   URL:
   https://mophicot.github.io/web_project_around_react/
