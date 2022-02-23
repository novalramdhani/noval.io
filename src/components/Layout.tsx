type LayoutProps = {
    children: any
}
    
export default function Layout({children}: LayoutProps) {
    return (
      <div className="antialiased font-sans min-h-screen tracking-tighter bg-gray-900 text-white flex justify-center items-center">
          {children}
      </div>
    )
}