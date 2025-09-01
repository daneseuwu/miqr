'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarOption {
    id: number;
    name: string;
    href: string;
    // icon: React.ReactNode;
}

const options: SidebarOption[] = [
    {
        id: 0,
        name: "Dashboard",
        href: "/qr",
        // icon: <DashboardIcon />
    },
    {
        id: 1,
        name: "Qr",
        href: "/qr",
        // icon: <NotebookIcon />
    },
    {
        id: 2,
        name: "WI-FI",
        href: "/qr-wifi",
        // icon: <NotebookIcon />
    },
    {
        id: 3,
        name: "Shortly",
        href: "/shortly",
        // icon: <NotebookIcon />
    }


];
const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full px-2 py-4">
            {/* <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Doitodo</h2> */}

            <div className="flex flex-col font-mono text-sm space-y-4">
                {options.map((option) => {
                    const isActive = pathname.startsWith(option.href);

                    return (
                        <Link
                            href={option.href}
                            key={option.id}>
                            {option.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Sidebar