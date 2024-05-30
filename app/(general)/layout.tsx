import { NavBar } from "@/components";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (

    <>
      <span>Esto esta escrito en el (general)Layout</span>
      <NavBar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>


    </>
  )
}