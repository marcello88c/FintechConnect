import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
    lightHeader?: boolean;
    children: React.ReactNode;
};

const Layout = ({ lightHeader, children }: LayoutProps) => {
    const pathname = usePathname();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <div className="min-h-screen pt-[6.75rem] overflow-hidden 2xl:pt-24 md:pt-18">
            <Header light={lightHeader} />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
