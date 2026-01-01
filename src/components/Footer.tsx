export default function Footer({ locale }: { locale: "es" | "en" }) {
  const t =
    locale === "es"
      ? { privacy: "Privacidad", legal: "Aviso legal", built: "Hecho para equipos sanitarios" }
      : { privacy: "Privacy", legal: "Legal", built: "Built for healthcare teams" };

  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">SalaTrack Health</div>
            <div className="text-sm text-zinc-600">{t.built}</div>
          </div>

          <div className="flex gap-4 text-sm text-zinc-600">
           <a className="hover:text-zinc-900" href="/es/legal/privacidad">
  Privacidad
</a>
<a className="hover:text-zinc-900" href="/es/legal/aviso-legal">
  Aviso legal
</a>
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} SalaTrack Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
}