import SidebarComponent from '@/components/sidebar/SidebarComponent';
import React from 'react'
import "@/app/globals.css"
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body className=''>
        <aside>
          <SidebarComponent/>
        </aside>
        <main className='absolute left-[30%] top-0 p-4'>
          {children}
        </main>
      </body>
      </html>
  )
}

export default layout