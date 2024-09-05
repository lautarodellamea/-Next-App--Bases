import type { Metadata } from "next";

// el tipado :Metadata nos sirve para ver que mas podemos poner dentro
export const metadata: Metadata = {
  title: 'SEO Title' + (new Date().toString()), // podemos usar expresiones js que no requieran argumentos, si lo requieren ya se hace de otra forma
  description: 'SEO Title',
  keywords: ["About Page", "Lautaro", "información", "..."],

};


export default function AboutPage() {
  return (

    <span className="flex min-h-screen text-7xl">About Page</span>
  )
}