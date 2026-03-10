import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6">
      <div className="font-bold">ONIRIASOLUTIONS</div>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}