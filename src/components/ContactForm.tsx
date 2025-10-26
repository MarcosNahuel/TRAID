import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    site: '',
    problem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Endpoint por defecto: POST /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', site: '', problem: '' });

      // Opcional: descomentar para integración con n8n
      /*
      await fetch('https://<tu-n8n>/webhook/traid-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      */
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 bg-purple-900/20 p-8 rounded-2xl border border-purple-500/20">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
            placeholder="Tu nombre completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            aria-label="Nombre completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-label="Correo electrónico"
          />
        </div>

        <div>
          <label htmlFor="site" className="block text-sm font-medium text-gray-200 mb-2">
            Sitio web
          </label>
          <input
            type="text"
            id="site"
            className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
            placeholder="https://tusitio.com"
            value={formData.site}
            onChange={(e) => setFormData({ ...formData, site: e.target.value })}
            aria-label="Sitio web"
          />
        </div>

        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-gray-200 mb-2">
            Principal problema operativo *
          </label>
          <textarea
            id="problem"
            rows={4}
            required
            className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 resize-none"
            placeholder="Describe el principal desafío o cuello de botella operativo que te gustaría resolver..."
            value={formData.problem}
            onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
            aria-label="Principal problema operativo"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">Gracias, te contactaremos dentro de 24 h hábiles.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>Enviando...</>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Enviar solicitud
            </>
          )}
        </button>
      </form>
    </div>
  );
}