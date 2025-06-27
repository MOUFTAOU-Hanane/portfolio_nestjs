import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
         
            Hanane MOUFTAOU
          
        </Link>

        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/">
           Accueil
          </Link>
          <Link href="/about">
À propos
          </Link>
        </div>
      </div>
    </nav>
  );
}
