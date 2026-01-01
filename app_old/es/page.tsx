"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import PageShell from "@/src/components/PageShell";

function FadeInSection(props: any) {
  const { children, className = "", delayMs = 0 } = props || {};
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current as any;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const base =
    "transition-all duration-700 ease-out will-change-transform " +
    (visible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-3 ");

  return (
    <div ref={ref} className={base + className} style={{ transitionDelay: `${delayMs}ms` }}>
      {children}
    </div>
  );
}

function runDevAssertions() {
  const isProd =
    typeof process !== "undefined" &&
    process?.env?.NODE_ENV === "production";
  if (isProd) return;

  console.assert(typeof FadeInSection === "function", "FadeInSection should be a function");
  console.assert(FadeInSection({ children: "ok" }) != null, "FadeInSection should return an element");
}

export default function HomeES() {
  useMemo(() => {
    runDevAssertions();
    return null;
  }, []);

  return (
    <PageShell locale="es">
      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <FadeInSection>
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-blue-700">SalaTrack Health</p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
                Smart medical scheduling and clinical workflow management
              </h1>

              <p className="mt-4 text-lg text-zinc-700">
                Una plataforma ligera y segura para coordinar agendas médicas,
                salas y flujos de pacientes en entornos clínicos reales.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/es/demo"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="/es/contacto"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                >
                  Contacto
                </Link>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                Designed by clinicians, for real hospital workflows
              </p>
            </div>
          </FadeInSection>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <FadeInSection delayMs={50}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold">Agendas unificadas</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Visión compartida para equipos clínicos y administrativos.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delayMs={120}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold">Gestión de salas</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Coordinación de recursos y espacios con trazabilidad.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delayMs={190}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold">Actualización en tiempo real</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Cambios y replanificación sin perder el control operativo.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <FadeInSection>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                La gestión de agendas clínicas sigue siendo fragmentada
              </h2>
              <p className="mt-4 text-zinc-700">
                Cuando cada unidad trabaja con su propia agenda, salas y cambios
                de última hora, aumenta la carga administrativa y se pierde
                visibilidad operativa.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-zinc-700">
                <li>• Múltiples agendas sin visión compartida</li>
                <li>• Cambios urgentes sin trazabilidad clara</li>
                <li>• Coordinación difícil entre salas, personal y pacientes</li>
                <li>• Sobrecarga para clínicos y administrativos</li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FadeInSection>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Una solución simple para un problema complejo
            </h2>
            <p className="mt-4 max-w-3xl text-zinc-700">
              SalaTrack Health centraliza la planificación clínica y mejora la
              coordinación del día a día: agendas, salas y flujo del paciente en un
              único lugar, con un diseño pensado para el hospital.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                { title: "Agenda médica", desc: "Planificación y replanificación ágil." },
                { title: "Salas y recursos", desc: "Asignación coordinada y visible." },
                { title: "Trazabilidad", desc: "Qué cambió, cuándo y por qué." },
                { title: "Visibilidad", desc: "Todos trabajan sobre la misma versión." },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <div className="text-sm font-semibold">{x.title}</div>
                  <p className="mt-2 text-sm text-zinc-600">{x.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-zinc-600">
              Right patient. Right room. Right time.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <FadeInSection>
          <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                ¿Listo para mejorar la coordinación clínica?
              </h2>
              <p className="mt-3 text-zinc-700">
                Diseñado para equipos sanitarios. Enfoque práctico, sin complejidad innecesaria.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Seguridad y privacidad (GDPR)</li>
                <li>• Trazabilidad de cambios</li>
                <li>• Enfoque en usabilidad hospitalaria</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/es/demo"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                Solicitar demo
              </Link>
              <Link
                href="/es/contacto"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
              >
                Contacto
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </PageShell>
  );
}