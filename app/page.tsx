'use client'

import Image from 'next/image'
import {
  BookOpen,
  Brain,
  Check,
  Clock,
  Compass,
  Crown,
  Mail,
  MessageCircle,
  Printer,
  ShieldCheck,
  Smartphone,
  Star,
} from 'lucide-react'
import { AvatarStack } from '@/components/landing/avatar-stack'
import { ChecklistItem } from '@/components/landing/checklist-item'
import { Countdown } from '@/components/landing/countdown'
import { CtaButton } from '@/components/landing/cta-button'
import { FaqSection } from '@/components/landing/faq-section'

const themes = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2016%20de%20ago.%20de%202026%2C%2001_13_53-DFHGuqRb4fNunnQH2Dhtu6dPVJXfCX.png',
    alt: 'Infografía ilustrada sobre Dios',
  },
  { src: '/assets/igreja.webp', alt: 'Iglesia' },
  { src: '/assets/salvacao.webp', alt: 'Salvación' },
  { src: '/assets/criacao.webp', alt: 'Creación' },
  { src: '/assets/pecado.webp', alt: 'Pecado' },
]

const materialFeatures = [
  { icon: BookOpen, title: '13 Libros Digitales', text: 'Recorrido completo de 52 semanas' },
  { icon: Smartphone, title: 'Acceso', text: 'Celular, tablet o computadora' },
  { icon: Printer, title: 'Imprimible', text: 'Imprime si tu familia lo prefiere' },
  { icon: Clock, title: 'Ritmo flexible', text: 'Pensado para uso semanal' },
]

const audienceItems = [
  'Prevenir el abandono de la fe en el futuro',
  'Ayudar a tu hijo a responder dudas difíciles',
  'Desarrollar un pensamiento cristiano profundo',
  'Ir más allá de la Escuela Dominical tradicional',
  'Construir una fe firme antes de la adolescencia',
]

const methodSteps = [
  {
    n: '01',
    icon: BookOpen,
    title: 'Estudio guiado',
    text: 'Tu hijo aprende a su propio ritmo, con lecciones cortas y objetivas.',
  },
  {
    n: '02',
    icon: MessageCircle,
    title: 'Conversaciones naturales',
    text: 'Las preguntas del material generan diálogos profundos en casa.',
  },
  {
    n: '03',
    icon: Brain,
    title: 'Pensamiento crítico cristiano',
    text: 'Aprende a evaluar ideas, dudas y cuestionamientos.',
  },
  {
    n: '04',
    icon: Compass,
    title: 'Fe aplicada a la vida real',
    text: 'La fe deja de ser abstracta y empieza a tener sentido.',
  },
]

const offerChecklist = [
  'Base teológica sólida',
  'Claridad intelectual',
  'Seguridad para responder cuestionamientos',
  'Fundamento para la adolescencia',
]

const bonuses = [
  {
    n: 1,
    img: '/assets/bonus-1.webp',
    title: 'Guía de los Padres Pensadores',
    text: 'Cómo lidiar con preguntas difíciles sobre la fe sin pánico, respuestas prefabricadas o conflictos, transformando las dudas en conversaciones constructivas.',
  },
  {
    n: 2,
    img: '/assets/bonus-2.webp',
    title: 'Manual de Errores Comunes que Debilitan la Fe Infantil',
    text: 'Actitudes comunes, pero perjudiciales, que muchos padres cometen sin darse cuenta, y cómo corregirlas para proteger el desarrollo de la fe.',
  },
  {
    n: 3,
    img: '/assets/bonus-3.webp',
    title: 'Guía de Transición: De los 14 a los 18 Años',
    text: 'Cómo apoyar a tus hijos en los cambios cognitivos y emocionales de la adolescencia final, sin control excesivo, miedo o presión.',
  },
]

const testimonials = [
  {
    n: 'Ana Paula R.',
    r: 'Madre de un niño de 9 años',
    q: 'Mi hijo siempre hacía preguntas difíciles y yo no sabía qué responder. Este material no me dio respuestas hechas, me enseñó a conversar mejor con mi hijo. Hoy él puede explicar por qué cree.',
  },
  {
    n: 'Ricardo M.',
    r: 'Padre de un niño de 11 años',
    q: 'Me di cuenta de que le estaba enseñando a mi hijo a repetir frases, no a pensar. Este recorrido me ayudó a corregir eso. Vi a mi hijo volverse más seguro al hablar de la fe sin ponerse a la defensiva.',
  },
  {
    n: 'Juliana S.',
    r: 'Madre soltera',
    q: 'Siempre tuve miedo de las dudas de mi hija. Pensaba que se estaba alejando. Hoy entiendo que las preguntas son parte del crecimiento. El material trajo más calma y profundidad.',
  },
]

const basicPlanFeatures: [string, boolean][] = [
  ["Serie 'Descubriendo el Porqué de la Fe' – 52 semanas", true],
  ['Guía de los Padres Pensadores', false],
  ['Manual de Errores Comunes que Debilitan la Fe', false],
  ['Guía de Transición: De los 14 a los 18 Años', false],
]

const completePlanFeatures = [
  "Serie 'Descubriendo el Porqué de la Fe' – 52 semanas",
  'Bono #1 Guía de los Padres Pensadores',
  'Bono #2 Manual de Errores Comunes que Debilitan la Fe',
  'Bono #3 Guía de Transición: De los 14 a los 18 Años',
]

const today = new Intl.DateTimeFormat('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(new Date())

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="bg-gradient-primary py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground sm:text-sm">
        <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>Oferta disponible solo hoy {today}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="container relative pt-12 pb-16 text-center sm:pt-16">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 text-accent">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Compra 100% segura</span>
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Construye una fe <span className="text-gradient-primary">inquebrantable</span> en tus hijos
          <br className="hidden md:block" /> antes de que sea demasiado tarde.
        </h1>
        <Image
          src="/assets/mockup-1.webp"
          alt="Colección de ebooks Descubriendo el Porqué de la Fe"
          width={720}
          height={720}
          className="mx-auto mt-8 w-full max-w-2xl"
          priority
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          La serie digital creada por{' '}
          <strong className="text-foreground">apologistas, teólogos y psicólogos infantiles</strong> para enseñar
          a niños de <strong className="text-primary">8 a 14 años</strong> a PENSAR la fe, no solo repetir
          historias bíblicas.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <CtaButton>Quiero asegurar mi acceso con descuento</CtaButton>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" /> Recibes todo al instante, directo en tu correo electrónico
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <AvatarStack />
        </div>
      </section>

      {/* Insight - desktop */}
      <section className="container hidden max-w-5xl py-16 md:block">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <h2 className="text-left text-2xl font-extrabold leading-tight text-foreground sm:text-3xl md:text-[2rem]">
            Cada lección hace que el niño <span className="text-gradient-primary">descubra la verdad por sí mismo</span>,
            creando conexiones profundas y duraderas.
          </h2>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/folhas-mockup.webp"
              alt="Maqueta de las hojas de actividades"
              width={480}
              height={480}
              className="w-full max-w-sm rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Insight - mobile grid of themes */}
      <section className="container max-w-3xl py-16 md:hidden">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">Contenido completo</p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Cada lección hace que el niño <span className="text-gradient-primary">descubra la verdad por sí mismo</span>,
            creando conexiones profundas y duraderas.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {themes.map((t) => (
            <Image
              key={t.alt}
              src={t.src}
              alt={t.alt}
              width={300}
              height={300}
              className="w-full rounded-2xl shadow-card"
            />
          ))}
          <div className="flex items-center justify-center">
            <p className="text-center text-2xl font-extrabold text-foreground sm:text-3xl">
              Y mucho <span className="text-gradient-primary">más...</span>
            </p>
          </div>
        </div>
      </section>

      {/* Um material único */}
      <section className="container py-14 text-center">
        <p className="mb-4 text-3xl font-extrabold uppercase tracking-widest text-accent sm:text-4xl">
          Un material único
        </p>
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-foreground sm:text-4xl">
          Recibirás un material que va <span className="text-gradient-primary">mucho más allá de la Escuela Dominical</span>.
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {materialFeatures.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card p-6 text-left shadow-card">
              <Icon className="mb-3 mt-2 h-8 w-8 text-primary sm:h-7 sm:w-7" />
              <h3 className="text-2xl font-bold text-foreground sm:text-lg">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo timer box */}
      <section className="container py-10">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-primary p-8 text-center text-primary-foreground shadow-glow sm:p-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/85">
            Aprovecha el precio promocional
          </p>
          <h3 className="mb-6 text-2xl font-extrabold sm:text-3xl">Por tiempo limitado</h3>
          <Countdown />
          <p className="mx-auto mt-8 max-w-xl text-lg text-white/90 sm:text-base">
            Aquí, tu hijo no aprende solo <em>qué</em> creer, sino <strong>por qué</strong> creer.
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <CtaButton>Quiero asegurar mi acceso</CtaButton>
          </div>
        </div>
      </section>

      {/* Audience checklist */}
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Este material es ideal para ti si deseas:
          </h2>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {audienceItems.map((item) => (
            <ChecklistItem key={item}>{item}</ChecklistItem>
          ))}
        </ul>
      </section>

      {/* Method */}
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">Método de aplicación</p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Cómo aplicar el método en el <span className="text-gradient-primary">día a día</span> de tu hijo
          </h2>
          <p className="mt-3 text-muted-foreground">Simple, práctico y directo al punto.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map(({ n, icon: Icon, title, text }) => (
            <div key={n} className="relative rounded-2xl bg-card p-6 shadow-card">
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Paso {n}
              </span>
              <Icon className="mb-3 mt-2 h-8 w-8 text-primary sm:h-7 sm:w-7" />
              <h3 className="text-2xl font-bold text-foreground sm:text-lg">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Limited offer */}
      <section className="container py-12">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-8 text-center shadow-card sm:p-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">Oferta limitada solo hoy</p>
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            Serie <span className="text-gradient-primary">&quot;Descubriendo el Porqué de la Fe&quot;</span>
          </h2>
          <p className="mt-2 text-muted-foreground">52 semanas de teología sistemática para niños.</p>
          <Image
            src="/assets/pacote-completo-oferta.webp"
            alt="Paquete completo de la serie Descubriendo el Porqué de la Fe"
            width={480}
            height={480}
            className="mx-auto mt-8 w-full max-w-md"
          />
          <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {offerChecklist.map((item) => (
              <ChecklistItem key={item}>{item}</ChecklistItem>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-md rounded-xl border-l-4 border-accent bg-accent/10 p-4 text-sm text-foreground">
            Esta oferta está disponible para las próximas <strong>7 familias</strong>. Después de eso, el precio será
            ajustado.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <CtaButton>Asegurar acceso con descuento</CtaButton>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" /> Recibes todo al instante, directo en tu correo electrónico
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Y no se detiene ahí... ¡hay más!
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            También recibirás <span className="text-gradient-primary">3 bonos exclusivos</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-3">
          {bonuses.map(({ n, img, title, text }) => (
            <div key={n} className="relative rounded-2xl bg-card p-8 shadow-card">
              <Image
                src={img}
                alt={`Bono ${n} - ${title}`}
                width={300}
                height={256}
                className="mb-6 h-56 w-full rounded-xl object-contain sm:h-64"
              />
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Bono #{n}</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{text}</p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-base font-bold text-success">
                Valor R$47 <span className="text-success">GRATIS</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="oferta" className="container scroll-mt-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-destructive">
            Última oportunidad — la oferta termina hoy
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">¡Elige el mejor plan para ti!</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Plano Básico */}
          <div className="flex flex-col rounded-3xl bg-card p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground">Plan Básico</h3>
            <p className="mt-1 text-base text-muted-foreground">
              Serie completa &quot;Descubriendo el Porqué de la Fe&quot;
            </p>
            <Image
              src="/assets/mockup-1.webp"
              alt="Maqueta del Plan Básico"
              width={320}
              height={288}
              className="mx-auto mt-6 h-64 w-full object-contain sm:h-72"
            />
            <ul className="mt-6 space-y-3 text-base">
              {basicPlanFeatures.map(([text, included]) => (
                <li key={text} className="flex items-start gap-3">
                  <Check
                    className={`mt-0.5 h-6 w-6 shrink-0 ${included ? 'text-success' : 'text-muted-foreground/30'}`}
                  />
                  <span className={included ? 'text-foreground' : 'text-muted-foreground/60 line-through'}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground line-through">de R$74,00 por:</p>
              <p className="text-5xl font-extrabold text-foreground">R$47,90</p>
              <p className="text-sm text-muted-foreground">o 12x de R$4,89 en la tarjeta</p>
              <p className="mt-2 inline-block rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                Ahorras R$26,10
              </p>
            </div>
            <div className="mt-auto pt-8">
              <CtaButton isOffer href="https://pay.wiapy.com/7NbR4fl2Q1">
                Quiero el plan básico
              </CtaButton>
            </div>
          </div>

          {/* Plano Completo */}
          <div className="relative flex flex-col rounded-3xl bg-card p-8 shadow-card">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-lg">
              ★ Más vendido
            </div>
            <div className="mb-1 flex items-center gap-2">
              <Crown className="h-5 w-5 text-accent" />
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Todos los bonos incluidos · 2x más contenido
              </p>
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">Plan Completo</h3>
            <Image
              src="/assets/pacote-completo.webp"
              alt="Maqueta del Plan Completo"
              width={320}
              height={288}
              className="mx-auto mt-6 h-64 w-full object-contain sm:h-72"
            />
            <ul className="mt-6 space-y-3 text-base">
              {completePlanFeatures.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-6 w-6 shrink-0 text-success" />
                  <span className="text-foreground">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground line-through">de R$147,00 por:</p>
              <p className="text-5xl font-extrabold text-foreground">R$67,90</p>
              <p className="text-sm text-muted-foreground">o 12x de R$6,93 en la tarjeta</p>
              <p className="mt-2 inline-block rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                Ahorras R$79,10
              </p>
            </div>
            <div className="mt-auto pt-8">
              <CtaButton isOffer href="https://pay.wiapy.com/Wim-S2Tyh">
                QUIERO EL PLAN COMPLETO
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="container py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl bg-card p-8 text-center shadow-card sm:flex-row sm:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-success/10">
            <ShieldCheck className="h-10 w-10 text-success" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Garantía incondicional de 90 días</h3>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg">
              Tienes 90 días para probar la metodología. Si por algún motivo sientes que no es para ti,
              te devolvemos el 100% de tu inversión, sin hacer preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Familias que ya se transformaron
          </p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Mira lo que nuestros clientes <span className="text-gradient-primary">están diciendo</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Lee los testimonios de quienes ya tomaron la decisión correcta.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.n} className="flex flex-col rounded-2xl bg-card p-6 shadow-card">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">&quot;{t.q}&quot;</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FaqSection />

      {/* Final CTA */}
      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
            ★ Esta oferta se cierra en
          </p>
          <div className="my-6">
            <Countdown />
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Enseñar la fe en casa es solo el comienzo.</h2>
          <p className="mt-3 text-lg text-white/90">
            Lo que cambia todo es prepararlo para <em>lo que sucede fuera de ella</em>.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <CtaButton>Quiero mi cupo ahora</CtaButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12 text-center text-sm text-background/70">
        <div className="container max-w-3xl space-y-3">
          <p className="font-semibold text-background">Descubriendo el Porqué de la Fe</p>
          <p>© 2026 — Todos los derechos reservados.</p>
          <p className="text-xs">Este sitio no está afiliado a Facebook, Instagram o Meta.</p>
          <p className="mx-auto max-w-2xl text-xs leading-relaxed">
            Cada familia vive una realidad diferente, por eso los resultados pueden variar. El contenido presentado
            tiene un carácter educativo y no garantiza resultados específicos. Los testimonios compartidos reflejan
            experiencias reales de personas que utilizaron el material.
          </p>
        </div>
      </footer>
    </div>
  )
}
