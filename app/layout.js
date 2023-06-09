
"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import '../styles/globals.css';

export default function RootLayout({ children }) {

  const router = useRouter()

  const onClickUrl = (url) => {
    router.push(url)
  }


  // tailwind
  const menuItem = (url, title, className) => (
    <div className={`bg-green-500 text-white py-3 px-5 rounded-lg my-2 ${className}`}> <Link href={url}>{title}</Link> </div>
  )

  return (
    <html lang="en">
      <body className="container mx-auto">

        <div className="inline-flex w-full">
          <div className="bg-blue-600 py-3 px-5 text-white my-2"><Link href={"/"}>MyApp</Link></div>
        <div className="inline-flex space-x-3 w-full justify-end">
          {menuItem('/dashboard-app', 'Dashboard')}
          {menuItem('/calculator', 'Calculator')}
          {menuItem('/cari', 'Cari Github')}

          {/* <li onClick={()=> onClickUrl('/settings')} >settings</li> */}
        </div>
        </div>

        {children}
      </body>
    </html>
  )
}
