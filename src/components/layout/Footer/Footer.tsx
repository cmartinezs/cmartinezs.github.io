import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6">
      <div className="container flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 Carlos Martínez. Software, docencia e IA aplicada.</span>
        <Link href="/contacto/">Construyamos algo sólido, escalable y profesional.</Link>
      </div>
    </footer>
  );
}
