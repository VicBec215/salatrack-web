import Link from "next/link";
import PageShell from "@/src/components/PageShell";

export default function HomeEN() {
  return (
    <PageShell locale="en">
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-700">SalaTrack Health</p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Smart medical scheduling and clinical workflow management
            </h1>

            <p className="mt-4 text-lg text-zinc-700">
              A lightweight, secure platform to coordinate medical agendas, rooms and patient flow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/en/demo" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 text-center">
                Request a demo
              </Link>
              <Link href="/en/contact" className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100 text-center">
                Contact
              </Link>
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              Designed by clinicians, for real hospital workflows
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}