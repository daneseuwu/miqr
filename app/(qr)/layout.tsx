import Footer from '@/components/footer/footer'
import Sidebar from '@/components/sidebar/sidebar'

interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex h-screen'>
            <div className="hidden lg:block bg-white w-44 h-screen border-r border-slate-100">
                <Sidebar />
            </div>

            <div className="flex flex-col flex-1 p-2">
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout