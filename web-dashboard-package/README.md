# Dashboard estático para web

Contenido listo para publicar el dashboard de Gambimedic como una página HTML autónoma.

## Archivos incluidos

- `index.html`: versión estática generada con `build_static_dashboard.py`. Incluye estilos y gráficos embebidos (imágenes en base64), por lo que no requiere assets adicionales.

## Cómo usarlo

1. Abrí `index.html` en cualquier navegador para revisar el resultado.
2. Publicalo en tu hosting copiando este archivo a la ruta deseada (por ejemplo, `public/` en Vercel, Netlify o cualquier servidor web).

## Actualizar datos

Si necesitás regenerar el HTML con datos nuevos:

1. Actualizá los JSON en `streamlit-dashboard/data/`.
2. Ejecutá `python3 streamlit-dashboard/build_static_dashboard.py`.
3. Copiá nuevamente el `static_site/index.html` generado a esta carpeta.

