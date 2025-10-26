# Integración del formulario de contacto

## Endpoint local: `/api/contact`

El formulario de contacto está configurado para enviar datos a `/api/contact` mediante POST.

### Campos del formulario

```json
{
  "name": "Nombre del contacto",
  "email": "email@ejemplo.com",
  "site": "https://sitio-web.com (opcional)",
  "problem": "Descripción del problema operativo"
}
```

### Configuración actual (desarrollo local)

El endpoint está configurado en `vite.config.ts` con un plugin personalizado que:
- Recibe los datos del formulario
- Los registra en la consola del servidor
- Devuelve una respuesta de éxito

### Cómo integrar con n8n

#### Opción 1: Webhook directo (recomendado para producción)

1. Crea un webhook en n8n (ej: `https://tu-n8n.com/webhook/traid-leads`)

2. En `src/components/ContactForm.tsx`, descomenta y configura el código n8n:

```typescript
// Descomentar esta sección en ContactForm.tsx (líneas 38-47)
await fetch('https://TU-N8N-URL/webhook/traid-leads', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

#### Opción 2: Endpoint backend intermedio

1. Crea un backend (Node.js/Express, Next.js API routes, etc.)
2. Implementa el endpoint `/api/contact` que:
   - Valide los datos
   - Envíe a n8n
   - Opcionalmente envíe email
   - Guarde en base de datos

#### Opción 3: Serverless (Vercel, Netlify)

Si depliegas en Vercel o Netlify, puedes crear una función serverless:

**Para Vercel:**
Crea `api/contact.ts`:

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, site, problem } = req.body;

    // Enviar a n8n
    await fetch('https://TU-N8N-URL/webhook/traid-leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, site, problem }),
    });

    return res.status(200).json({
      success: true,
      message: 'Formulario recibido correctamente'
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error procesando el formulario'
    });
  }
}
```

## Pruebas locales

### Iniciar el servidor de desarrollo:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5173`

### Probar el endpoint con curl:
```bash
curl -X POST http://localhost:5173/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "site": "https://test.com",
    "problem": "Testing the contact form"
  }'
```

### Ver los datos recibidos:
Los datos aparecerán en la consola del servidor con el emoji 📨

## Notas importantes

- El endpoint actual es solo para desarrollo local
- Para producción, DEBES implementar una solución backend real
- Considera agregar:
  - Validación de datos
  - Rate limiting
  - Protección anti-spam (reCAPTCHA, hCaptcha)
  - Logs y monitoreo
  - Manejo de errores robusto

## Configuración de n8n

Tu workflow de n8n debe:

1. **Webhook Trigger** - Recibe los datos del formulario
2. **Validation** - Valida el email y otros campos
3. **Email Node** - Envía notificación al equipo
4. **CRM Integration** (opcional) - Guarda el lead en tu CRM
5. **Response** - Devuelve confirmación

### Ejemplo de estructura de webhook en n8n:

```
Webhook (POST)
  ↓
Set (validar y transformar datos)
  ↓
Split in Batches
  ├─→ Send Email (notificación interna)
  ├─→ Google Sheets / Airtable (guardar lead)
  └─→ Slack/Discord (notificación equipo)
  ↓
Respond to Webhook (200 OK)
```
