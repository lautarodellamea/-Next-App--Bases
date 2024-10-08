import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."


const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
]

export const NavBar = () => {


  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href={"/"} className="flex items-center" prefetch={false}> {/* al poner el prefetch en false no hace el prefetch de la pagina about, ponerlo en true para mejorar rendimiento, total el servidor se encarga de eso */}
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className='flex flex-1'></div>

      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }

      {/*  
      <Link className='mr-2' href="/about">About</Link>
      <Link className='mr-2' href="/pricing">Pricing</Link>
      <Link className='mr-2' href="/contact">Contact</Link>
      */}
    </nav>
  )
}
