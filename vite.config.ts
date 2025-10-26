import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin para manejar el endpoint /api/contact
const apiPlugin = (): Plugin => ({
  name: 'api-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            console.log('📨 Contacto recibido:', data);

            // Aquí puedes agregar lógica para enviar a n8n, email, etc.
            // Por ahora solo lo logueamos y devolvemos éxito

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: true,
              message: 'Formulario recibido correctamente',
              data: data
            }));
          } catch (error) {
            console.error('❌ Error procesando formulario:', error);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: false,
              message: 'Error procesando el formulario'
            }));
          }
        });
      } else {
        next();
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), apiPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
});
