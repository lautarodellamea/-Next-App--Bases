import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'SEO Title' + (new Date().toString()),
  description: 'SEO Title',
  keywords: ["About Page", "Lautaro", "información", "..."],

};


export default function AboutPage() {
  return (

    <span className="flex min-h-screen text-7xl">About Page</span>
  )
}