 <!DOCTYPE html>
    2 <html lang="es">
    3 <head>
    4     <meta charset="UTF-8">
    5     <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    6     <title>Página con Fondo Animado</title>
    7     <!-- Aquí irían tus otros enlaces a CSS o metadatos -->
    8 
    9     <style>
   10       /* CSS para el contenedor del fondo animado */
   11       #vanta-background {
   12         position: fixed; /* Fija el fondo a la ventana */
   13         top: 0;
   14         left: 0;
   15         width: 100%;
   16         height: 100%;
   17         z-index: -1; /* Asegura que esté detrás de tu contenido */
   18       }
   19 
   20       /* Opcional: Estilos básicos para tu contenido para que sea visible */
   21       body {
   22         margin: 0;
   23         padding: 20px;
   24         font-family: sans-serif;
   25         color: white; /* Para que el texto sea visible sobre el fondo oscuro */
   26         position: relative; /* Necesario para que el z-index del contenido funcione */
   27         z-index: 0;
   28       }
   29 
   30       h1 {
   31         text-align: center;
   32         margin-top: 50px;
   33       }
   34     </style>
   35 </head>
   36 <body>
   37     <!-- Este div es el contenedor donde se renderizará la animación de VANTA.js -->
   38     <div id="vanta-background"></div>
   39 
   40     <!-- Tu contenido principal iría aquí -->
   41     <h1>¡Bienvenido a mi página con fondo animado!</h1>
   42     <p>Este es un ejemplo de cómo replicar el efecto de fondo dinámico.</p>
   43 
   44     <!-- Scripts necesarios para VANTA.js y Three.js -->
   45     <!-- Es importante que estos scripts se carguen al final del body o con 'defer' -->
   46     <script defer src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
   47     <script defer src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
   48 
   49     <script>
   50       // Inicializa el fondo de VANTA.js una vez que el DOM esté cargado
   51       document.addEventListener('DOMContentLoaded', function() {
   52         // Puedes añadir una condición para que solo se active en escritorio si lo deseas
   53         const isDesktop = window.matchMedia('(min-width: 768px)').matches;
   54         if (isDesktop && window.VANTA && window.THREE) {
   55           window.vantaEffect = VANTA.WAVES({
   56             el: "#vanta-background", // El ID del div donde se renderizará
   57             mouseControls: true,
   58             touchControls: false,
   59             gyroControls: false,
   60             minHeight: 200.00,
   61             minWidth: 200.00,
   62             scale: 1.00,
   63             scaleMobile: 1.00,
   64             color: 0x20207, // Color principal de las ondas
   65             shininess: 28.00,
   66             waveSpeed: 0.65,
   67             zoom: 0.97
   68           });
   69         }
   70       });
   71     </script>
   72 </body>
   73 </html>