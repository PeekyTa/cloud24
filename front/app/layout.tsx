import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#0b0d17] overflow-x-hidden  text-gray-200 mx-auto px-2 sm:w-screen md:max-w-none md:w-screen'>{children}</body>
    </html>
  )
}