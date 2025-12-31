import { MessageCircle } from "lucide-react";
import Logo from "../Logo";

export default function FooterSection() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black to-transparent border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div>
            <Logo width={120} height={26} className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatizaciones e IA para ecommerce. Automatización de ventas
              total, n8n, integraciones con WhatsApp, MercadoLibre y
              Shopify.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Servicios", "Metodología", "Casos", "Equipo"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-purple-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Plataformas
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Shopify", "MercadoLibre", "TiendaNube", "WooCommerce"].map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://wa.me/5491136579967"
                  className="hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@traid.agency"
                  className="hover:text-purple-300 transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/traid-agency"
                  className="hover:text-purple-300 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-purple-500/10 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TRAID Agency. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
