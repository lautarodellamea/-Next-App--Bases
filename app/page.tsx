import Link from "next/link";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <span className="text-5xl">Hola Mundo</span>

      <Link href={"/about"} className="bg-blue-500 text-white px-2 py-1 mt-4 rounded hover:bg-blue-400 transition-all">About Page</Link>

      <p className="mt-10">Todo el file-system dentro de la carpeta App esta basado en servers components, en realidad TODO es server component para especificar que quiero un client component debo colocar use client</p>

      <p className="mt-10">La carpeta (general) me sirve por ejemplo para aplicar un sub layout, lñas metadatas si no la especifico en el layout usara las del subsiguientes y asi.</p>
    </main>
  );
}
