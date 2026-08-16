import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs: [string, string][] = [
  [
    '¿Esto es un curso de teología?',
    'Es un recorrido de teología sistemática adaptado para niños, enfocado en desarrollar el pensamiento crítico cristiano de forma simple y progresiva.',
  ],
  [
    '¿Es necesario seguir un orden o calendario?',
    'Recomendamos seguir la secuencia semanal propuesta, pero el ritmo es flexible y cada familia puede adaptarlo a su rutina.',
  ],
  [
    '¿Esto sustituye a la iglesia o a la escuela bíblica?',
    'No. El material complementa la vida en comunidad de la iglesia, ofreciendo profundidad adicional dentro de casa.',
  ],
  [
    '¿El contenido es todo digital?',
    'Sí. Recibes los 13 libros en PDF de alta calidad, con la posibilidad de imprimirlos si lo prefieres.',
  ],
  [
    '¿Por cuánto tiempo tengo acceso?',
    'El acceso es de por vida. Una vez adquirido, el material es tuyo para siempre.',
  ],
  ['¿Puedo acceder desde el celular?', 'Sí, desde cualquier dispositivo: celular, tablet o computadora.'],
  [
    '¿Y si no me gusta el curso?',
    'Tienes 90 días de garantía incondicional. Si no es para ti, te devolvemos el 100% del valor sin hacer preguntas.',
  ],
]

export function FaqSection() {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">Preguntas frecuentes</h2>
        <Accordion type="single" className="mt-10 flex flex-col gap-3">
          {faqs.map(([question, answer], i) => (
            <AccordionItem
              key={question}
              value={`item-${i}`}
              collapsible
              className="rounded-2xl border-0 bg-card px-6 shadow-card not-last:border-b-0"
            >
              <AccordionTrigger className="text-left text-base font-bold text-foreground hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
