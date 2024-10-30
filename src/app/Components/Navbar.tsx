import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-950 text-slate-300 p-4 z-50">
      <ul className="flex justify-center space-x-4">
        <li className=' hover:text-slate-500'><Link href="/">Home</Link></li>
        <li className=' hover:text-slate-500'><Link href="/about">About</Link></li>
        <li className=' hover:text-slate-500'><Link href="/contact">Contact</Link></li>
        <li className=' hover:text-slate-500'><Link href="/services">Services</Link></li>
        <li className=' hover:text-slate-500'><Link href="/products">Products</Link></li>
        <li className=' hover:text-slate-500'><Link href="/adress">Adress</Link></li>
      </ul>
    </nav>
  );
}
