"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from './ActiveLink.module.css'



interface Props {
  path: string;
  text: string;
}


export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();
  // console.log(pathName)

  return (
    <Link className={`${style.link} ${(pathName === path) && style['active-link']}`} href={path} prefetch={false}>{text}</Link>
  )
}


// PREFETCHING
// el prefetch es para habilitar la pre-renderización, para verlo es solo en produccion
// https://nextjs.org/docs/app/api-reference/components/link#prefetch

// si no trabajamos con fetch, es decir, usamos axios u otra cosa
// debemos especificar el prefetch de la siguiente forma
// export const revalidate = false o 0 significa que la persona siempre que entre a esa pantalla, esta se regenerara
// export const revalidate = 60 // 60 seconds
// al comienso del server component o pagina, los valores deben ser primitivos o puros, no expresiones de javascript como sumas, etc.
// no hacer 60 * 10, sino que se pone 600 // 60 segundos


// si ese un server component el renderizado de componentes lo hace el servidor, si es un client component lo hace el cliente, pero el prefetching se hace siempre en el cliente

// en consola del navegador CTRL+SHIFT+P -> habilitar/deshabilitar javascript y hacer pruebas, recordar que next se ejecuta del lado del seervidor por lo que me es indiferente si el usuario lo desactiva.