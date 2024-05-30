import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Contact',
  description: 'Esta es la página de contacto de la empresa',
};

export default function ContactPage() {
  return (
    <>
      <span className="flex min-h-screen text-7xl">Contact Page</span>
    </>
  )
}