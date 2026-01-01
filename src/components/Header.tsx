"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getLocaleFromPath(pathname: string) {
  if (pathname.startsWith("/en")) return "en";
  return "es";
}

function switchLocalePath(pathname: string, target: "es" | "en") {
  const current = getLocaleFromPath(pathname);
  if (current === target) return pathname;

  if (current === "es") return pathname.replace(/^\/es/, "/en");
  return pathname.replace(/^\/en/, "/es");
}

export default function Header() {
  const pathname = usePathname() || "/es";
  const locale = getLocaleFromPath(pathname);

  const t =
    locale === "es"
      ? { demo: "Solicitar demo", contact: "Contacto", product: "Producto" }
      : { demo: "Request a demo", contact: "Contact", product: "Product" };

  const demoHref = locale === "es" ? "/es/demo" : "/en/demo";
  const contactHref = locale === "es" ? "/es/contacto" : "/en/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={locale === "es" ? "/es" : "/en"} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-blue-600" aria-hidden />
          <div className="leading-tight">
            <div className="text-sm font-semibold">SalaTrack Health</div>
            <div className="text-xs text-zinc-500">{t.product}</div>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href={contactHref}
            className="hidden rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 md:inline-block"
          >
            {t.contact}
          </Link>

          <Link
            href={demoHref}
            className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {t.demo}
          </Link>

          <div className="ml-2 flex items-center rounded-xl border border-zinc-200 bg-white p-1 text-sm">
            <Link
              href={switchLocalePath(pathname, "es")}
              className={`rounded-lg px-2 py-1 ${
                locale === "es" ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              ES
            </Link>
            <Link
              href={switchLocalePath(pathname, "en")}
              className={`rounded-lg px-2 py-1 ${
                locale === "en" ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}