import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 overflow-auto">
        <Link className="font-bold flex items-center text-lg" href="/">
        <img src="/icon.svg" className="h-9 w-auto mr-3"/> 
        ONIRIASOLUTIONS
        </Link>
      
      

      <div className="flex gap-6">
        <Link href="/solutions" className="align-middle">Solutions</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}