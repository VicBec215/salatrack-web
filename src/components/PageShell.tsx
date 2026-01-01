import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({
  locale,
  children,
}: {
  locale: "es" | "en";
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}