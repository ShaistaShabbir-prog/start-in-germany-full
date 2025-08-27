import Link from "next/link";
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container-narrow py-8 text-sm text-gray-600 flex flex-wrap gap-4 items-center justify-between">
        <div>© {new Date().getFullYear()} Start in Germany</div>
        <nav className="flex gap-4">
          <Link href="/imprint">Imprint</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        </nav>
      </div>
    </footer>
  );
}
