# Refactorización: Extraer secciones de App.tsx

**Fecha:** 2025-01-01
**Estado:** Aprobado
**Objetivo:** Reducir App.tsx de ~1050 líneas a ~110 líneas extrayendo secciones a componentes independientes

---

## Problema

El archivo `App.tsx` contiene toda la lógica y UI de la landing page en un solo archivo de más de 1000 líneas, lo que dificulta:
- Mantenimiento y edición de secciones individuales
- Reutilización de componentes
- Testing aislado
- Colaboración en equipo

---

## Solución

Extraer cada sección en su propio componente, separar datos de UI, y dejar App.tsx como orquestador.

### Estructura de archivos propuesta

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CasosDeExitoSection.tsx
│   │   ├── PanelEntregableSection.tsx
│   │   ├── QueHacemosSection.tsx
│   │   ├── PilaresSection.tsx
│   │   ├── OfertaSection.tsx
│   │   ├── ServiciosSection.tsx
│   │   ├── MetodologiaSection.tsx
│   │   ├── EquipoSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── index.ts
│   ├── CaseModal.tsx          # Nuevo - Modal de casos
│   └── casos-de-exito/        # Existente
├── data/
│   └── caseStudies.tsx        # Datos de casos de éxito
├── types/
│   └── index.ts               # Tipos compartidos
└── App.tsx                    # Orquestador (~110 líneas)
```

---

## Diseño de componentes

### App.tsx (Orquestador)

```tsx
function App() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <VantaBackground>
      <div className="min-h-screen text-white">
        <Navbar />
        <HeroSection />
        <CasosDeExitoSection onOpenCase={setActiveCase} />
        <div className="section-divider" />
        <PanelEntregableSection />
        <QueHacemosSection />
        <PilaresSection />
        <OfertaSection />
        <ServiciosSection />
        <div className="section-divider" />
        <MetodologiaSection />
        <EquipoSection />
        <div className="section-divider" />
        <FAQSection />
        <FooterSection />
      </div>

      {activeCase && (
        <CaseModal caseStudy={activeCase} onClose={() => setActiveCase(null)} />
      )}

      <WhatsAppButton phoneNumber="5491136579967" />
    </VantaBackground>
  );
}
```

### Tipos (src/types/index.ts)

```tsx
import { ComponentType, ReactNode } from "react";

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  cardBackground: string;
  highlight: {
    value: string;
    label: string;
    colorClass: string;
  };
  tags: string[];
  component: ComponentType;
  modalDescription: string;
  hideModalHeader?: boolean;
};

export type HeroStat = {
  value: number;
  suffix: string;
  label: string;
};
```

### Datos (src/data/caseStudies.tsx)

Contiene:
- `caseStudies: CaseStudy[]` - Array con los 7 casos de éxito
- `heroStats: HeroStat[]` - Stats del hero section

### Props de componentes

| Componente | Props | Descripción |
|------------|-------|-------------|
| HeroSection | ninguna | Usa heroStats internamente |
| CasosDeExitoSection | `onOpenCase: (case: CaseStudy) => void` | Callback para abrir modal |
| CaseModal | `caseStudy: CaseStudy, onClose: () => void` | Modal del dashboard |
| Resto de secciones | ninguna | Datos internos, autónomas |

---

## Plan de implementación

### Fase 1: Setup de estructura
1. Crear carpeta `src/types/` con `index.ts`
2. Crear carpeta `src/data/` con `caseStudies.tsx`
3. Crear carpeta `src/components/sections/`

### Fase 2: Extraer secciones (en orden)
1. HeroSection
2. CasosDeExitoSection
3. CaseModal
4. PanelEntregableSection
5. QueHacemosSection
6. PilaresSection
7. OfertaSection
8. ServiciosSection
9. MetodologiaSection
10. EquipoSection
11. FAQSection
12. FooterSection

### Fase 3: Actualizar App.tsx
1. Importar todos los componentes
2. Reemplazar código inline por componentes
3. Limpiar imports no usados

### Fase 4: Verificación
1. `npm run build` sin errores
2. `npm run dev` y verificar funcionamiento visual
3. Probar modal de casos de éxito

---

## Resultado esperado

- **App.tsx:** ~1050 líneas → ~110 líneas (reducción del 90%)
- **Componentes nuevos:** 12 archivos de sección + 1 modal
- **Archivos de datos:** 1 archivo con tipos, 1 con datos
- **Beneficios:** Mejor mantenibilidad, testing más fácil, colaboración mejorada
